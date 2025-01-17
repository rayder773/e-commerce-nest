import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { getModels } from './utils/getModels';
const { databaseConfig } = require('./database.config.js');

let config;
const mode = process.env.NODE_ENV || DEVELOPMENT;

switch (mode) {
  case DEVELOPMENT:
    config = databaseConfig.development;
    break;
  case TEST:
    config = databaseConfig.test;
    break;
  case PRODUCTION:
    config = databaseConfig.production;
    break;
  default:
    config = databaseConfig.development;
}

const sequelize = new Sequelize(config);

async function sync(force = false) {
  const models = await getModels();
  sequelize.addModels(models);
  await sequelize.sync({ force });
}

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      await sync();
      return sequelize;
    },
  },
];
