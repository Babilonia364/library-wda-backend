'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Rents.init({
    book: {
      type: DataTypes.INTEGER,
      references: {
        model: "Books",
        key: "id",
      },
    },
    user: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
    },
    rent_date: DataTypes.DATE,
    devolution_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Rents',
  });
  return Rents;
};