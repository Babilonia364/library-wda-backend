const Joi = require('joi');
const Books = require('../models/book');

module.exports = async (req, res, DataTypes, connection) => {
  const request = req.body;

  const schema = Joi.object({
    book_name: Joi.string().min(3).required().messages({
      'string.min': 'O nome do livro deve conter pelo menos 3 caracteres',
      'any.required': 'Informe o nome do livro',
      'any.empty': 'Informe o nome do livro',
      'string.base': 'Informe um nome de livro válido',
    }),
    author: Joi.string().min(3).required().messages({
      'string.min': 'O nome do autor deve conter pelo menos 3 caracteres',
      'any.required': 'Informe o nome do autor',
      'any.empty': 'Informe o nome do autor',
      'string.base': 'Informe um nome de autor válido',
    }),
    release: Joi.date().required().messages({
      'any.required': 'Informe a data de publicação do livro',
      'date.base': 'Informe uma data de publicação do livro válida',
    }),
    publisher: Joi.number().required().messages({
      'any.required': 'Informe a editora',
      'number.base': 'Informe uma editora válida',
    }),
  });

  try {
    await schema.validateAsync(request);
  } catch (error) {
    return res.status(400).json(error.details);
  }

  const newBook = await Books(connection, DataTypes).create({
    book_name: request.book_name,
    author: request.author,
    release: request.release,
    publisher: request.publisher,
  });
  return res.status(201).json(newBook);
};