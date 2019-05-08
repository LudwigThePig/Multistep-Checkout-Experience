CREATE DATABASE checkout;

USE checkout;

CREATE TABLE order (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
  name VARCHAR(20),
  billingZip VARCHAR(20),
  city VARCHAR(20),
  creditCard VARCHAR(20),
  cvv VARCHAR(20),
  email VARCHAR(20),
  expiration VARCHAR(20),
  line1 VARCHAR(20),
  line2 VARCHAR(20),
  name VARCHAR(20),
  password VARCHAR(20),
  state VARCHAR(20),
  zip VARCHAR(20)
);