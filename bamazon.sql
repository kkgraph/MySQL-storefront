DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255),
    department_name VARCHAR(255),
    price INT,
    stock_quantity INT,
    primary key (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("eyeliner", "beauty", 10.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("eyeshadow", "beauty", 15.99, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("candle", "home", 5.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("scarf", "clothes", 24.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lamp", "home", 100.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("perfume", "beauty", 16.75, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("coffee mug", "home", 10.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dog treats", "pets", 10.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("necklace", "jewlrey", 150.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("blanket", "home", 17.99, 15);
