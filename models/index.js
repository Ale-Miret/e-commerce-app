// Import necessary models and Sequelize library's important parts
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { Model, DataTypes } = require('sequelize');


// Set up the model associations
Product.belongsTo(Category, { foreignKey: 'category_id' });
Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'product_id' });
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id' });


// Export all models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
