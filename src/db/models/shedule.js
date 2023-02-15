'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shedule.init({
    weekdaysOpening: DataTypes.TIME,
    weekdaysClosing: DataTypes.TIME,
    weekendOpening: DataTypes.TIME,
    weekendClosing: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Shedule',
  });
  return Shedule;
};