# RnD
It is to explore, learn and try anything interesting.
# Technology Stack
 * [Node.js](https://nodejs.org): Server.
 * [MongoDB](https://docs.mongodb.com/): Database.
 * [Mongoose](http://mongoosejs.com/): Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box for MongoDB.
 * [Express](https://expressjs.com/): Node.js framework for building REST APIs

# Pre-requisites
1. [Install](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions) Node.js (Use ^10.13)
2. [Install](https://docs.mongodb.com/master/tutorial/install-mongodb-on-ubuntu/#using-deb-packages-recommended) MongoDB (Use 3.6.8)
3. Install Git: `sudo apt-get install git`

# Getting Started

    $ git clone https://github.com/nodexpertsdev/RnD.git
    $ git checkout develop
    $ cd RnD/expressEngine
    $ npm start

# Swagger Documentation
Use /api-docs to access swagger docs for this api.

# Database Collections
 * customer - All customer details
 * order - Details of orders
 * product - Details of products
 * user - User's details like their email, password, last login and username
 * userDetail - Store other details of user's.
 * orderItem - Map the order collection with product collection

# Structure and Naming
 * Use camel case for naming files and folders.
 * Defining the directory structure for only one collection: user

 * expressEngine
    ├── cms
    |   └── user
    |       ├── index.js
    |       ├── user.js
    |       ├── success.js
    |       └── info.js
    ├── db
    |   └── db.js
    ├── doc
    |   └── swagger.json
    ├── lib
    |   ├── controller
    |   |   ├── base.js
    |   |   └── info.js
    |   └── service
    |       ├── base.js
    |       ├── db.js
    |       └── info.js
    ├── model
    |   ├── collection
    |   |   └── user.js
    |   ├── lib
    |   |   └── index.js
    |   └── index.js
    └── user
        ├── controller
        |   ├── user.js
        |   └── index.js
        ├── service
        |   ├── index.js
        |   └── user.js
        └── route.js

