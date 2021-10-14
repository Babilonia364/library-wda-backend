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
    return queryInterface.bulkInsert('Users', [
      {
        user_name: "João Lopes",
        address: "Rua A, 190",
        city: "Fortaleza",
        email: "joão@bol",
        createdAt: moment().format('YYYY-MM-DD HH:MM:SS'),
        updatedAt: moment().format('YYYY-MM-DD HH:MM:SS')
      },
      {
        user_name: "Marcelo Silva",
        address: "Av. B, 1200",
        city: "Fortaleza",
        email: "ms@gmail",
        createdAt: moment().format('YYYY-MM-DD HH:MM:SS'),
        updatedAt: moment().format('YYYY-MM-DD HH:MM:SS')
      },
      {
        user_name: "Carlos Aguiar",
        address: "Rua C, 87",
        city: "Fortaleza",
        email: "aguiar@ig",
        createdAt: moment().format('YYYY-MM-DD HH:MM:SS'),
        updatedAt: moment().format('YYYY-MM-DD HH:MM:SS')
      },
      {
        user_name: "Roberta Porto",
        address: "Rua D, 120",
        city: "Recife",
        email: "rporto@bol",
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
