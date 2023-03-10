// Import necessary modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the Category model
class Category extends Model {}

// Set up the fields and rules for the Category model
Category.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  category_name: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'category',
});

// Export the Category model
module.exports = Category;
