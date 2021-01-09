'use strict';
const { v4: uuidv4 } = require('uuid');
const { ids } = require('./01-product');

const langs = ['ru', 'en'];

const randomStr = () => Math.random().toString(36).substring(2);
const randomArrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const items = new Array(100).fill(0).map((element) => {
  return {
    id: uuidv4(),
    lang: randomArrayElement(langs),
    title: randomStr(),
    description: ''.padEnd(50, randomStr()),
    product_id: randomArrayElement(ids),
  };
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProductTranslations', items, {});
  },

  down: async (queryInterface, Sequelize) => {},
};
