const fs = require('fs');
const path = require('path');

const pathToModels = (...more) => path.join('src', 'models', ...more);
const entityFileRegex = new RegExp('entity.ts$');
function toCapital(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const entities = [];

export const getModels = async () => {
  const modelFolders = fs.readdirSync(pathToModels());

  for (let i = 0; i < modelFolders.length - 1; i++) {
    const modelFolder = modelFolders[i];
    const folderContent = fs.readdirSync(pathToModels(modelFolder));
    const isEntity = folderContent.find((file) => entityFileRegex.test(file));

    if (isEntity) {
      const entity = await import(
        `../../../models/${modelFolder}/${modelFolder}.entity`
      );

      entities.push(...Object.values(entity));
    }
  }

  return entities;
};
