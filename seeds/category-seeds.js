// Require the Category model from the models directory
const { Category } = require('../models');

// Define an array of objects with the data for each category
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// Define a function to bulk create the categories using the categoryData array
const seedCategories = () => Category.bulkCreate(categoryData);

// Export the seedCategories function
module.exports = seedCategories;
