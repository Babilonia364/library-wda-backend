const Joi = require('Joi');
const Users = require('../models/users');

module.exports = async (req, res, DataTypes, connection) => {
  const request = req.body;

  const schema = Joi.object({
    id: Joi.number().required().messages({
      'any.required': 'Informe o usuário',
      'number.base': 'Informe um usuário válido',
    }),
    user_name: Joi.string().min(3).required().messages({
      'string.min': 'O nome de usuário deve conter pelo menos 3 caracteres',
      'any.required': 'Informe o nome do usuário',
      'any.empty': 'Informe o nome do usuário',
      'string.base': 'Informe um nome de usuário válido',
    }),
    city: Joi.string().min(3).required().messages({
      'string.min': 'O nome da cidade deve conter pelo menos 3 caracteres',
      'any.required': 'Informe o nome da cidade',
      'any.empty': 'Informe o nome da cidade',
      'string.base': 'Informe um nome de cidade válido',
    }),
    address: Joi.string().min(3).required().messages({
      'string.min': 'O endereço deve conter pelo menos 3 caracteres',
      'any.required': 'Informe o endereço',
      'any.empty': 'Informe o endereço',
      'string.base': 'Informe um endereço válido',
    }),
    email: Joi.string().min(3).required().messages({
      'string.min': 'O email deve conter pelo menos 3 caracteres',
      'any.required': 'Informe o email',
      'any.empty': 'Informe o email',
      'string.base': 'Informe um email válido',
    }),
  });

  try {
    await schema.validateAsync(request);
  } catch (error) {
    return res.status(400).json(error.details);
  }

  const user = await Users(connection, DataTypes).findOne({
    attributes: ['user_name', 'city', 'address', 'email'],
    where: {
      id: request.id
    },
  });

  for(let item in request) {
    user[item] = request[item];
  };

  const updatedUser = await user.save();

  return res.status(200).json(updatedUser);
}