# U-Save

- Final project for SOFE 3700U - Data Management Systems
- An online grocery store for post-secondary students
- Created using React, Node.js, Express, and PostgreSQL
- Contributers: Anson Tu (100655482), Kaushik Ramani (100651855)

# Prerequisites

- Node.js (v10.15.0)
- NPM (v6.4.1)
- Yarn Package Manager (v.1.16.0)
- PostgreSQL (13.1)

# NOTE

- The instructions written below were written for setup and installation on a Windows machine.

# Setting up PostgreSQL

- Download the latest version of PostgreSQL from their website.
- Go through the setup wizard.
  - Select all components (PostgreSQL Server, pgAdmin 4, etc).
  - Keep the port number as 5432.
- Once installation has completed, open a new command-line.
- Enter `psql -U postgres`. A prompt will appear, telling you to enter the password that was created during setup.
- Enter the password. On success, a connection will be established to the database.
- To quit the current session, enter `\q`.
- To check the connection info, enter `\conninfo`.

# Creating a new user for testing

- To test the application with a local PostgreSQL database, a new user needs to be created.
- For testing purposes, a new user, `dev`, will be created, with a password of `password1`.
- To create a new user, enter `CREATE ROLE dev WITH LOGIN PASSWORD 'password1';`.
- To allow the new user to create a database, enter `ALTER ROLE dev CREATEDB;`.
- To check if the new user was successfully created, enter `\du`.
- Enter `\q` to quit the current session.

# Creating and connect to a new local database

- A new local database needs to be created with the appropriate settings to test the application locally.
- To connect to Postgres using the created `dev` user, enter `psql -d postgres -U dev`.
- To create a new database, enter `CREATE DATABASE usave;`.
- To check if the `usave` database was successfully created, enter `\list`.
- To connect to the `usave` database, enter `\c usave`, or quit the current session by entering `\q`, and then enter `psql -d usave -U dev`.

# Creating tables for the database

- To create a new table, enter:

```
CREATE TABLE {table_name} (
  {primary_key_field} SERIAL PRIMARY KEY,
  {column_one_name} {dataType},
  {column_two_name} {dataType}
)
```

- For the U-Save application, four tables need to be created: `customer`, `supplier`, `product`, and `order_details`.

```
CREATE TABLE customer (
  customer_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  phone VARCHAR(255),
  email VARCHAR(255),
  address VARCHAR(255)
);
CREATE TABLE supplier (
  supplier_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  phone VARCHAR(255)
);
CREATE TABLE product (
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  quantity INTEGER,
  price FLOAT(10),
  supplier_id INTEGER REFERENCES supplier(supplier_id)
);
CREATE TABLE order_details (
  order_id SERIAL PRIMARY KEY,
  order_date DATE,
  shipping_date DATE,
  product_quantity INTEGER,
  customer_id INTEGER REFERENCES customer(customer_id),
  product_id INTEGER REFERENCES product(product_id)
);
```

- To check if the table was successfully created, enter `\dt`.
- To view the contents of the table, enter `SELECT * FROM {table_name};`.

# Populating the local database (IMPORT METHOD)

- Attached to this code repository is a sample data file, `sample_data.psql`. 
- To import this data, enter `psql usave < sample_data.psql`. This should populate the local database's tables with the data from the file.
- If this step was successful, skip ahead to `# Project Installation`.
- If this step was not successful, test data will need to be manually added to the local database. To do so, please follow the steps below, under the section `# Adding data to the database (MANUAL INPUT)`.

# Populating the local database (MANUAL INPUT)

- To add rows to the table, enter:

```
INSERT INTO {table_name}( {column_one}, {column_two} )
  VALUES( {values_one}, {values_two} ), ( {values_one}, {values_two} );
```

- For example, to add rows to the `supplier` table, enter:

```
INSERT INTO supplier(name, address, phone)
  VALUES('Vegetable Haven', '123 Midnight Drive, Ajax, Ontario, A4C9V9', '6135550146');
```

# Project Installation

- Clone the repo using `git clone https://github.com/AnsonTu/U-Save.git`
- There are two directories in this project, one for the client, and one for the server
- To install the depedencies for the frontend portion, `cd` into the client directory, and run `yarn install`.
- To install the depedencies for the backend portion, `cd` into the server directory, and run `npm install`.

# Running the project

- To run the client, `cd` into the client directory, and enter `yarn start`.
- To run the server, `cd` into the server directory, and enter `npm run dev`.
- The client, server, and database must all be online and running for the U-Save application to be fully functional.
- To check the status of the client, go to `localhost:3000` on the browser.
- To check the status of the server, go to `localhost:3090` on the browser.
