'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shedule extends Model {
    static associate(models) {
    }
  }
  Shedule.init({
    weekdaysOpening: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    weekdaysClosing: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    weekendOpening: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    weekendClosing: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Shedule',
  });
  return Shedule;
};
