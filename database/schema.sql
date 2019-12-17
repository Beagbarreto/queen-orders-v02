DROP DATABASE IF EXISTS burgerqueen;

CREATE DATABASE burgerqueen;

USE burguerqueen;

CREATE TABLE breakfast(
  itemID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  item varchar(30) NOT NULL,
  price int(5)
);

INSERT INTO breakfast(item, price) VALUES ('cafe americano', '$5.00');
INSERT INTO breakfast(item, price) VALUES ('cafe con leche', '$.00');
INSERT INTO breakfast(item, price) VALUES ('sandwich de jamon y queso', '$10.00');
INSERT INTO breakfast(item, price) VALUES ('juego natural', '$7.00');

CREATE TABLE lunch(
  itemID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  item varchar(30) NOT NULL,
  type varchar(30) NOT NULL,
  price int(5)
);

INSERT INTO lunch(item, price, type)
VALUES ('Hamburguesa simple', '$10.00');

CREATE TABLE orders(
  ordersID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(60) NOT NULL,
  day DATE(500),
  time1 TIME
  items varchar(1500),
  price varchar(500),
  quantity int (10),
  total int(20),
  notes varchar(500),
  FOREIGN KEY (itemID) REFERENCES lunch(itemID),
  FOREIGN KEY (itemID) REFERENCES breakfast(itemID)
);
