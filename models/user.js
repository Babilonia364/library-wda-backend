const { DataTypes, Model } = require('sequelize');
const connection = require('../database/connection');

class User extends Model { };

User.init({
  cod_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: connection,
  modelName: 'User',
  tableName: 'Users',
});

module.exports = User;