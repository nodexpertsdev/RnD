# Express

An express api to create users, products and orders.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Pre-requisites
1. [Install](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions) Node.js (Use ^10.13)
2. [Install](https://docs.mongodb.com/master/tutorial/install-mongodb-on-ubuntu/#using-deb-packages-recommended) MongoDB (Use 3.6.8)
3. Install Git: `sudo apt-get install git`

### Installing

	$ git clone https://github.com/nodexpertsdev/RnD.git
    $ cd RnD
    $ git checkout develop
    $ cd express
    $ npm start

## Swagger Documentation

Use /api-docs to access swagger docs.

### Database Collections

* customer - Details of customers.
* order - Details of orders.
* product - Details of products.
* user - Details of users.
* userDetail - Other details of users.
* orderItem - Map the orders with products.

### Structure and Naming

* Use camel case for naming files and folders.
* Example directory structure for only one collection: user

*  ```
    expressEngine
    |
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

### Guidelines

* [Coding](https://github.com/nodexpertsdev/RnD/blob/develop/CODING.md)
* [Issue and PR](https://github.com/nodexpertsdev/RnD/blob/develop/ISSUE_AND_PR.md)

### Maintainers
* **[Amanjot Singh](https://github.com/amanjotSuccessive)**
* **[Faiyaz Ahmad](https://github.com/faiyaz24)**
* **[Himanshu Gupta](https://github.com/himanshu-nodex)**
* **[Kartikay Ranjan](https://github.com/kartikay-nx)**
* **[Manish Kumar](https://github.com/manish-nx)**
* **[Mayank Kumar Awasthi](https://github.com/mayank-nx)**
* **[Nishant Naithani](https://github.com/NishantNaithani1997)**
* **[Nitin Chauhan](https://github.com/Nitin17SS)**
* **[Nitin Kumar Bhola](https://github.com/nitinbhola44)**
* **[Shalu Sharma](https://github.com/sharmashalu)**
* **[Shraddha Goel](https://github.com/shraddhagoelss)**
* **[Shubham Kumar Madheshiya](https://github.com/shubhkm)**
