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

    const users = await queryInterface.sequelize.query(
      `SELECT id FROM "Users"`
    );
    const books = await queryInterface.sequelize.query(
      `SELECT id from "Books"`
    );

    const usersRows = users[0];
    const bookRows = books[0];

    return queryInterface.bulkInsert('Rents', [
      {
        book: bookRows[2].id,
        user: usersRows[2].id,
        rent_date: moment('12/04/2010', 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS'),
        devolution_date: moment('27/04/2010', 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS'),
        createdAt: moment().format('YYYY-MM-DD HH:MM:SS'),
        updatedAt: moment().format('YYYY-MM-DD HH:MM:SS')
      },
      {
        book: bookRows[1].id,
        user: usersRows[3].id,
        rent_date: moment('13/04/2010', 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS'),
        devolution_date: moment('01/05/2010', 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS'),
        createdAt: moment().format('YYYY-MM-DD HH:MM:SS'),
        updatedAt: moment().format('YYYY-MM-DD HH:MM:SS')
      },
      {
        book: bookRows[4].id,
        user: usersRows[0].id,
        rent_date: moment('16/04/2010', 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS'),
        devolution_date: moment('27/10/2021', 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS'),
        createdAt: moment().format('YYYY-MM-DD HH:MM:SS'),
        updatedAt: moment().format('YYYY-MM-DD HH:MM:SS')
      },
      {
        book: bookRows[1].id,
        user: usersRows[1].id,
        rent_date: moment('20/04/2010', 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS'),
        devolution_date: moment('30/11/2021', 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS'),
        createdAt: moment().format('YYYY-MM-DD HH:MM:SS'),
        updatedAt: moment().format('YYYY-MM-DD HH:MM:SS')
      },
      {
        book: bookRows[3].id,
        user: usersRows[3].id,
        rent_date: moment('28/04/2010', 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS'),
        devolution_date: moment('17/01/2022', 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS'),
        createdAt: moment().format('YYYY-MM-DD HH:MM:SS'),
        updatedAt: moment().format('YYYY-MM-DD HH:MM:SS')
      },
      {
        book: bookRows[5].id,
        user: usersRows[2].id,
        rent_date: moment('12/05/2010', 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS'),
        devolution_date: moment('19/05/2010', 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS'),
        createdAt: moment().format('YYYY-MM-DD HH:MM:SS'),
        updatedAt: moment().format('YYYY-MM-DD HH:MM:SS')
      },
      {
        book: bookRows[5].id,
        user: usersRows[3].id,
        rent_date: moment('21/05/2010', 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS'),
        devolution_date: moment('27/01/2022', 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS'),
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
