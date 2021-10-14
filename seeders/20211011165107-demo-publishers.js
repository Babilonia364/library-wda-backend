'use strict';
const moment = require('moment')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Publishers', [
      {
        publisher_name: "Makron",
        city: "São Paulo",
        createdAt: moment().format('YYYY-MM-DD HH:MM:SS'),
        updatedAt: moment().format('YYYY-MM-DD HH:MM:SS')
      },
      {
        publisher_name: "Campus",
        city: "Rio de Janeiro",
        createdAt: moment().format('YYYY-MM-DD HH:MM:SS'),
        updatedAt: moment().format('YYYY-MM-DD HH:MM:SS')
      },
      {
        publisher_name: "Pearson",
        city: "São Paulo",
        createdAt: moment().format('YYYY-MM-DD HH:MM:SS'),
        updatedAt: moment().format('YYYY-MM-DD HH:MM:SS')
      },
      {
        publisher_name: "Bookman",
        city: "São Paulo",
        createdAt: moment().format('YYYY-MM-DD HH:MM:SS'),
        updatedAt: moment().format('YYYY-MM-DD HH:MM:SS')
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
