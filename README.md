# E-Commerce App

This project is a back end for an e-commerce site built using Node.js, Express.js, Sequelize, and MySQL.

## Table of Contents: 

- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [Links](#Links)


# Installation
To install this project, you should clone the repository and install the necessary dependencies using the following command:
``` 
npm install
```
# Usage
To run the application, use the following command:
```
npm start 
```
This will start the server and sync the Sequelize models to the MySQL database.

The API has the following routes:
* `GET /api/categories` : returns all categories in the database
* `GET /api/products` : returns all products in the database, including their associated Category and Tag data
* `GET /api/tags` : returns all tags in the database
* `POST /api/categories` : creates a new category
* `POST /api/products`: creates a new product
* `POST /api/tags`: creates a new tag
* `PUT /api/categories/:id `: updates a category by ID
* `PUT /api/products/:id`: updates a product by ID
* `PUT /api/tags/:id`: updates a tag by ID
* `DELETE /api/categories/:id`: deletes a category by ID
* `DELETE /api/products/:id`: deletes a product by ID
* `DELETE /api/tags/:id` : deletes a tag by ID

# Walkthrough Video


# Links
[GitHub Repo](https://github.com/Ale-Miret/e-commerce-app)
