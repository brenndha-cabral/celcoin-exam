DROP DATABASE IF EXISTS Celcoin;

CREATE DATABASE Celcoin;

USE Celcoin;

CREATE TABLE products (
    product_id INT NOT NULL auto_increment,
    product_name VARCHAR(100) NOT NULL,
    product_value_unit DECIMAL(6, 2),
    product_date_exclusion DATETIME DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY(product_id)

) ENGINE=INNODB;

CREATE TABLE users (
    user_id INT NOT NULL auto_increment,
    user_name VARCHAR(50) NOT NULL,
    user_email VARCHAR(50) NOT NULL,
    user_date_inclusion DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(user_id)
) ENGINE=INNODB;

CREATE TABLE orders_product (
    order_id INT NOT NULL auto_increment,
    order_product_id INT NOT NULL,
    order_user_id INT NOT NULL,
    order_quantity INT NOT NULL,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    PRIMARY KEY(order_id),
    
    FOREIGN KEY (order_product_id)
        REFERENCES products (product_id)
        ON DELETE CASCADE,
    FOREIGN KEY (order_user_id)
        REFERENCES users (user_id)
        ON DELETE CASCADE
)  ENGINE=INNODB;

CREATE TABLE transactions_product (
    transaction_id INT NOT NULL auto_increment,
    transaction_order_id INT NOT NULL,
    transaction_total_value DECIMAL(6, 2),
    transaction_status_id INT NOT NULL,
    transaction_date DATETIME DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY(transaction_id),
    
	FOREIGN KEY (transaction_order_id)
		REFERENCES orders_product (order_id)
		ON DELETE CASCADE
) ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;

INSERT INTO Celcoin.products (product_name, product_value_unit, product_date_exclusion) VALUES
    ("Martelo de Thor", 100.90, NOW()),
    ("Traje de encolhimento", 358.59, NOW()),
    ("Escudo do Capitão América", 634.47, NOW());

INSERT INTO Celcoin.users (user_name, user_email, user_date_inclusion) VALUES
    ('Maria', 'maria@teste.com', NOW()),
    ('Luiza', 'luiza@teste.com', NOW()),
    ('Carlos', 'carlos@teste.com', NOW());

INSERT INTO Celcoin.orders_product (order_user_id, order_product_id, order_quantity, order_date) VALUES
    (1, 1, 6, NOW()),
    (2, 2, 5, NOW()),
    (3, 3, 4, NOW()),
    (3, 2, 6, NOW()),
    (2, 2, 5, NOW()),
    (1, 2, 2, NOW()),
    (3, 2, 1, NOW()),
    (3, 1, 5, NOW());

INSERT INTO Celcoin.transactions_product (transaction_order_id, transaction_total_value, transaction_status_id, transaction_date) VALUES
    (1, 605.40, 3, NOW()),
    (2, 1792.95, 2, NOW()),
    (3, 2537.88, 3, NOW()),
    (4, 3806.82, 2, NOW()),
    (5, 1792.95, 3, NOW()),
    (6, 210.80, 3, NOW()),
    (7, 634.47, 2, NOW()),
    (8, 3172.35, 2, NOW());
