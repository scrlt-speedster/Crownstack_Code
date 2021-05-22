const dbConn = require('../dbConnection').getConnection();
const { Sequelize, DataTypes, Model } = require('sequelize');


class Currency extends Model {}


Currency.init({
   // Model attributes are defined here
  
   id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  }

}, {
  sequelize: dbConn, 
  modelName: 'Currency',
  tableName: 'Currency'
});

module.exports = Currency;