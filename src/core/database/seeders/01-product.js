'use strict';
const { v4: uuidv4 } = require('uuid');

const ids = [];

const products = new Array(50).fill(0).map((element) => {
  const id = uuidv4();
  ids.push(id);

  return {
    id,
    quantity: Math.random() * 100,
    price: Math.random() * 1000,
    compareAtPrice: Math.random() * 1000,
  };
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', products, {});
  },

  down: async (queryInterface, Sequelize) => {},

  ids,
};
