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
     const publishers = await queryInterface.sequelize.query(
      `SELECT id FROM "Publishers"`
    );

    const publishersRows = publishers[0];

    await queryInterface.bulkInsert('Books', [
      {
        book_name: "Banco de Dados",
        author: "Navathe",
        release: new Date(2002, 0),
        publisher: publishersRows[2].id,
        createdAt: moment().format('YYYY-MM-DD HH:MM:SS'),
        updatedAt: moment().format('YYYY-MM-DD HH:MM:SS')
      },
      {
        book_name: "Redes de Computadores ",
        author: "Deitel",
        release: new Date(2005, 0),
        publisher: publishersRows[1].id,
        createdAt: moment().format('YYYY-MM-DD HH:MM:SS'),
        updatedAt: moment().format('YYYY-MM-DD HH:MM:SS')
      },
      {
        book_name: "Java Prático",
        author: "Deitel",
        release: new Date(2004, 0),
        publisher: publishersRows[3].id,
        createdAt: moment().format('YYYY-MM-DD HH:MM:SS'),
        updatedAt: moment().format('YYYY-MM-DD HH:MM:SS')
      },
      {
        book_name: "Sistemas Operacionais",
        author: "Cormen",
        release: new Date(2006, 0),
        publisher: publishersRows[2].id,
        createdAt: moment().format('YYYY-MM-DD HH:MM:SS'),
        updatedAt: moment().format('YYYY-MM-DD HH:MM:SS')
      },
      {
        book_name: "Algoritmos",
        author: "Cormen",
        release: new Date(2005, 0),
        publisher: publishersRows[1].id,
        createdAt: moment().format('YYYY-MM-DD HH:MM:SS'),
        updatedAt: moment().format('YYYY-MM-DD HH:MM:SS')
      },
      {
        book_name: "Programando em C++",
        author: "Deitel",
        release: new Date(2006, 0),
        publisher: publishersRows[2].id,
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
