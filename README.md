# The Milk Store Backend

This repository contains a backend application built using Node.js, Express, and TypeScript. The application serves mock data via an API that allows users to navigate through the available products in a milk store and place mock orders.

# Prerequisites

Before running the application, make sure you have the following software installed on your machine:

    Node.js (v14 or higher)
    npm (Node Package Manager)

# Installation

    Clone this repository to your local machine.

    Navigate to the project's root directory.

    Run the following command to install the dependencies:

    npm install

# Usage

To start the application, run the following command:

npm start

The server will start running on the specified port, and you should see a message indicating the server is running.
API Endpoints
Get All Products

    URL: /api/milkstore
    Method: GET
    Description: Fetches all the products available in the milk store.
    Response:
        Status Code: 200 (OK)
        Body: An object containing the count of products and an array of product objects named 'results', each containing the following properties:
            name (string): The name of the product.
            type (string): The type of product.
            storage: (number): The number of products in stock.
            id (string): The unique identifier of the product.

Place a Mock Order

    URL: /api/milkstore
    Method: PATCH
    Description: Makes update to storage level in database.
    Request:
        URL Parameter:
            productId (string): The unique identifier of the product.
        Body: An object containing the following properties:
            storage (number): The new storage level.
    Response:
        Status Code: 200 (OK)
        Body: An object containing the count of products and an array of product objects named 'results', each containing the following properties:
            name (string): The name of the product.
            type (string): The type of product.
            storage: (number): The number of products in stock.
            id (string): The unique identifier of the product.

# Author
<h3>Robert Bish</h3>

<a href='https://www.linkedin.com/in/robert-bish-1a6a8637'>
  <img src='https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white' alt='LinkedIn Badge'/>
</a>
<a href='https://robertbishwebdeveloper.com'>
  <img src='https://img.shields.io/badge/Portfolio-darkgreen?style=for-the-badge&logo=portfolio&logoColor=white' alt='Portfolio Badge'/>
</a>
<a href='https://www.facebook.com/robert.bish.9'>
  <img src='https://img.shields.io/badge/Facebook-darkblue?style=for-the-badge&logo=facebook&logoColor=white' alt='Facebook Badge'/>
</a>

