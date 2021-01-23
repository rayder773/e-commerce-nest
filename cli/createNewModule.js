const fs = require('fs');
const util = require('util');

const { toCapitalize, toPlural } = require('./utils');

const createDir = util.promisify(fs.mkdir);
const appendFile = util.promisify(fs.appendFile);
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

function getControllerFile(module) {
  return `
import { Controller } from '@nestjs/common';

@Controller('')
export class ${toCapitalize(module)}Controller {}

`;
}

function getEntityFile(module) {
  return `
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class ${toCapitalize(module)} extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
  })
  id: number;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    defaultValue: +new Date(),
  })
  createdAt: number;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    defaultValue: +new Date(),
  })
  updatedAt: number;
}

`;
}

function getModuleFile(module) {
  const nameToCapital = toCapitalize(module);

  return `
import { Module } from '@nestjs/common';
import { ${nameToCapital}Controller } from './${module}.controller';
import { ${module}Provider } from './${module}.provider';
import { ${nameToCapital}Service } from './${module}.service';

@Module({
  controllers: [${nameToCapital}Controller],
  providers: [${nameToCapital}Service, ...${module}Provider],
  exports: [${nameToCapital}Service],
})
export class ${nameToCapital}Module {}

`;
}

function getProviderFile(module) {
  const nameToCapital = toCapitalize(module);
  const nameToUpper = module.toUpperCase();

  return `
import { ${nameToCapital} } from './${module}.entity';
import { ${nameToUpper}_REPOSITORY } from '../../core/constants';

export const ${module}Provider = [
  {
    provide: ${nameToUpper}_REPOSITORY,
    useValue: ${nameToCapital},
  },
];

`;
}

function getDtoFile(module) {
  const nameToCapital = toCapitalize(module);

  return `
import { ApiProperty } from '@nestjs/swagger';

export class create${nameToCapital}Dto {
}

export class delete${nameToCapital}Dto {
}

export class update${nameToCapital}Dto {
  @ApiProperty()
  readonly id: string;
}

  `;
}

function getServiceFile(module) {
  const nameToCapital = toCapitalize(module);
  const nameToUpper = module.toUpperCase();
  const nameToPlural = toPlural(nameToCapital);

  return `
import { Injectable, Inject } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { update${nameToCapital}Dto } from './dto/${module}.dto';
import { ${nameToUpper}_REPOSITORY } from '../../core/constants';
import { ${nameToCapital} } from './${module}.entity';

@Injectable()
export class ${nameToCapital}Service {
  constructor(
    @Inject(${nameToUpper}_REPOSITORY)
    private readonly ${module}Repository: typeof ${nameToCapital},
  ) {}
  
  async getAll${nameToPlural}(): Promise<${nameToCapital}[]> {
    return await this.${module}Repository.findAll();
  }
  
  async create${nameToCapital}(${module}): Promise<${nameToCapital}> {
    return await this.${module}Repository.create<${nameToCapital}>({
      id: uuidv4(),
      ...${module},
    });
  }
  
  async update${nameToCapital}(
    updated${nameToCapital}: update${nameToCapital}Dto,
  ): Promise<[number, ${nameToCapital}[]]> {
    return await this.${module}Repository.update(updated${nameToCapital}, {
      where: {
        id: updated${nameToCapital}.id,
      },
    });
  }
}

`;
}

const files = {
  controller: getControllerFile,
  entity: getEntityFile,
  module: getModuleFile,
  provider: getProviderFile,
  service: getServiceFile,
  dto: getDtoFile,
};

const createNewModule = async () => {
  const model = (process.argv[2] && process.argv[2]) || '';

  if (!module) {
    return false;
  }

  try {
    await createDir(`src/models/${model}`);

    const fileNames = Object.keys(files);

    for (let i = 0; i < fileNames.length; i++) {
      const nameOfCurrentFile = `src/models/${model}/${model}.${fileNames[i]}.ts`;
      const contentOfCurrentFile = files[fileNames[i]](model).trim();

      await appendFile(nameOfCurrentFile, contentOfCurrentFile);
    }

    await createDir(`src/models/${model}/dto`);
    await appendFile(
      `src/models/${model}/dto/${model}.dto.ts`,
      files.dto(model),
    );

    const constantFile = await readFile('src/core/constants/index.ts', 'utf8');
    const newConstantFile =
      constantFile +
      `export const ${model.toUpperCase()}_REPOSITORY = '${model.toUpperCase()}_REPOSITORY';\n`;

    await writeFile('src/core/constants/index.ts', newConstantFile);
    const appModulePath = 'src/app.module.ts';

    const appModuleFile = await readFile(appModulePath, 'utf8');
    const imports = appModuleFile.match(/import(.*?);/g).join('\n') || '';
    const importedModules = appModuleFile.match(/imports: \[(.*?)\]/s)[0] || '';

    if (!imports.length || !importedModules.length) {
      return false;
    }

    const importedModuleName = `${toCapitalize(model)}Module`;
    const newImports =
      imports +
      `\nimport { ${importedModuleName} } from './models/${model}/${model}.module';`;

    const newImportedModules = importedModules.split(',');
    newImportedModules.splice(-1, 0, `\n\t${importedModuleName}`);

    const newAppModuleFile = appModuleFile
      .replace(imports, newImports)
      .replace(importedModules, newImportedModules);

    await writeFile(appModulePath, newAppModuleFile);
  } catch (err) {
    return console.error('custom', err);
  }
};

createNewModule();
