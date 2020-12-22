'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    Example: await queryInterface.bulkInsert(
      'Languages',
      [
        {
          id: 1,
          name: 'ru',
        },
        {
          id: 2,
          name: 'en',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
