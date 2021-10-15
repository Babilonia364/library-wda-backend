const Joi = require('joi');
const Publishers = require('../models/publisher');

module.exports = async (req, res, DataTypes, connection) => {
  const request = req.body;

  const schema = Joi.object({
    publisher_name: Joi.string().min(3).required().messages({
      'string.min': 'O nome da editora deve conter pelo menos 3 caracteres',
      'any.required': 'Informe o nome da editora',
      'any.empty': 'Informe o nome da editora',
      'string.base': 'Informe um nome de editora válido',
    }),
    city: Joi.string().min(3).required().messages({
      'string.min': 'O nome da cidade deve conter pelo menos 3 caracteres',
      'any.required': 'Informe o nome da cidade',
      'any.empty': 'Informe o nome da cidade',
      'string.base': 'Informe um nome de cidade válido',
    })
  });

  try {
    await schema.validateAsync(request);
  } catch (error) {
    return res.status(400).json(error.details);
  }

  const newPublisher = await Publishers(connection, DataTypes).create({
    publisher_name: request.publisher_name,
    city: request.city
  });
  return res.status(201).json(newPublisher);
}