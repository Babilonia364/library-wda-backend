'use strict';

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
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_name: "Marcelo Silva",
        address: "Av. B, 1200",
        city: "Fortaleza",
        email: "ms@gmail",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_name: "Carlos Aguiar",
        address: "Rua C, 87",
        city: "Fortaleza",
        email: "aguiar@ig",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_name: "Roberta Porto",
        address: "Rua D, 120",
        city: "Recife",
        email: "rporto@bol",
        createdAt: new Date(),
        updatedAt: new Date()
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
