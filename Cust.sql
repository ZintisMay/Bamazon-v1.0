CREATE DATABASE Bamazon;

use Bamazon;

CREATE TABLE Products(
ItemID int,
ProductName VARCHAR(30),
DepartmentName VARCHAR(30),
Price decimal(2),
StockQuantity int

);

ALTER TABLE Products MODIFY Price decimal(10,2);


DELETE FROM Products WHERE ItemID = 1;

UPDATE Products SET ItemID = 12 WHERE StockQuantity = 50;
UPDATE Products SET ItemID = 18 WHERE StockQuantity = 5;
UPDATE Products SET ItemID = 17 WHERE StockQuantity = 23;
UPDATE Products SET ItemID = 16 WHERE StockQuantity = 100;
UPDATE Products SET ItemID = 15 WHERE StockQuantity = 15;
UPDATE Products SET ItemID = 14 WHERE StockQuantity = 20;
UPDATE Products SET ItemID = 13 WHERE StockQuantity = 500;
select * from Products ORDER BY ItemID ASC;


INSERT INTO Products(ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES (
1,
"Snickers",
"Food",
1.29,
211
);

INSERT INTO Products(ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES (
2,
"Twix",
"Food",
1.50,
50
);

INSERT INTO Products(ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES (
3,
"Gobstoppers",
"Food",
.99,
500
);

INSERT INTO Products(ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES (
4,
"M&M's",
"Food",
1.11,
20
);

INSERT INTO Products(ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES (
5,
"Starburst",
"Food",
1.59,
15
);

INSERT INTO Products(ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES (
6,
"Hershey's",
"Food",
1.99,
100
);

INSERT INTO Products(ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES (
7,
"Ferroche",
"Food",
2.50,
23
);

INSERT INTO Products(ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES (
8,
"Samsung Galaxy S3",
"Electronics",
625,
5
);

INSERT INTO Products(ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES (
9,
"Ipod Touch",
"Electronics",
59.99,
10
);

INSERT INTO Products(ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES (
10,
"Skullcandy Sidewinder",
"Electronics",
24.99,
7
);

