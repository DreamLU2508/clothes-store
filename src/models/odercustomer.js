'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OderCustomer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OderCustomer.init({
    userId: DataTypes.INTEGER,
    note: DataTypes.STRING,
    orderDate: DataTypes.DATE,
    toalMoney: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'OderCustomer',
  });
  return OderCustomer;
};