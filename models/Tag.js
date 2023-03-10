// import Sequelize's Model and DataTypes
const { Model, DataTypes } = require('sequelize');

// import the database connection from config.js
const sequelize = require('../config/connection');

// initialize Tag model by extending off Sequelize's Model class
class Tag extends Model {}

// set up fields and rules for Tag model
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    // define options for model
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// export Tag model
module.exports = Tag;
