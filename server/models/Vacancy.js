'use strict';
const {
  Model, Sequelize, DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vacancy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vacancy.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    english_lvl: DataTypes.STRING,
    grade: DataTypes.STRING,
    tags: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      default: []
    }
  }, {
    sequelize,
    modelName: 'vacancy',
  });
  return Vacancy;
};