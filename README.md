# Product and Category Management Application

This is a simple application built using Node.js, Express, and Sequelize to manage products and categories. It provides routes to add, edit, delete, and list categories and products.

## Routes Overview

### 1. **Categories Route**
The `/categories` route is used for managing categories in the application. It provides the following features:

#### **GET /categories**
- Fetches all the categories from the database.
- Displays a list of categories on the page.

#### **POST /categories**
- Used to create a new category.
- **Body Parameters**:
  - `categoryId` (optional): The ID of the category. This is automatically generated by the database.
  - `name`: The name of the category (required).
  - `description`: A short description of the category.

#### **POST /categories/delete/:id**
- Deletes a category by its `id`.
- **Parameters**:
  - `id`: The ID of the category to be deleted.

### 2. **Products Route**
The `/products` route is used for managing products in the application. It allows you to create, list, and manage products.

#### **GET /products**
- Fetches all the products from the database, including their associated categories.
- Displays a list of products on the page.

#### **POST /products**
- Used to create a new product.
- **Body Parameters**:
  - `name`: The name of the product (required).
  - `price`: The price of the product (required).
  - `categoryId`: The ID of the category to which the product belongs (required).

#### **POST /products/edit/:id**
- Used to update an existing product.
- **Parameters**:
  - `id`: The ID of the product to be edited.
  - **Body Parameters**:
    - `name`: The new name of the product.
    - `price`: The new price of the product.
    - `categoryId`: The new category ID to which the product belongs.

#### **POST /products/delete/:id**
- Deletes a product by its `id`.
- **Parameters**:
  - `id`: The ID of the product to be deleted.

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/product-category-management.git
   cd product-category-management
   npm install
