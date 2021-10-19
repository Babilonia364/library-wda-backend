const Joi = require('joi')
              .extend(require('@joi/date'));
const Rents = require('../models/rents');

module.exports = async (req, res, DataTypes, connection) => {
  const request = req.body;

  const schema = Joi.object({
    book: Joi.number().required().messages({
      'any.required': 'Informe o livro',
      'number.base': 'Informe um livro válido',
    }),
    user: Joi.number().required().messages({
      'any.required': 'Informe o usuário',
      'number.base': 'Informe um usuário válido',
    }),
    rent_date: Joi.date().format('YYYY-MM-DD').required().messages({
      'any.required': 'Informe a data de aluguel do livro',
      'date.base': 'Informe uma data de aluguel do livro válida',
    }),
    devolution_date: Joi.date().format('YYYY-MM-DD').required().messages({
      'any.required': 'Informe a data de devolução do livro',
      'date.base': 'Informe uma data de devolução do livro válida',
    }),
  });

  try {
    await schema.validateAsync(request);
  } catch (error) {
    console.log('date: ', request.rent_date);
    return res.status(400).json(error.details);
  }

  const newRents = await Rents(connection, DataTypes).create({
    book: request.book,
    user: request.user,
    rent_date: request.rent_date,
    devolution_date: request.devolution_date,
  });
  return res.status(201).json(newRents);
};