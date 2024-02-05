/*

2/3/2024

SQL - Structured Query Language

   - Get all data (*) from a certain table of a SQL table: */

SELECT ColumnName from TableName;
SELECT * from TableName;

/* - Get Column data */

SELECT ColumnName from TableName;
SELECT CustomerName from Customers;

/* - Get distinct Column Data aka gets each Column value only once */

SELECT DISTINCT ColumnTable from TableName;
SELECT DISTINCT CustomerName from Customers;

/* - Get number of rows from a query */

SELECT COUNT(*) from TableName;
SELECT COUNT(CustomerName) from Customers;

/* 
	FLTERING DATA
	
	
	
  - Filter data from a query 

	Operators include:
		>
		<
		=
		>=
		<=
		!= or <> depending on SQL version
*/

SELECT * from TableName WHERE ColumnName = 3;
SELECT * from Customers WHERE CustomerID > 5;

/* Conditions can be joined with AND, OR, & NOT */

SELECT * from TableName WHERE Column1 > 3 AND Column2 > 6;
SELECT * from TableName WHERE Column1 > 3 OR (Column2 > 6 AND Column3 < 2);
SELECT * from TableName WHERE NOT Column2 = "United States";


/* 
	SORTING DATA
	
	
	
  - Sort data ascendingly from a query
	
	Without ASC/DESC defined:
	If the data is a string then it will sort alphabetically
	otherwise it will sort ascendingly by default */

SELECT * from TableName ORDER BY ASC;
SELECT * from TableName ORDER BY ColumnName;

/* - Sort data descendingly from a query */

SELECT * from TableName ORDER BY DESC;

/* - Data can also be sorted by multiple columns */

SELECT X, Y, Z from TableName ORDER BY  X DESC, Z;

SELECT CustomerName, CustomerTotal from Customers
ORDER BY CustomerName ASC, CustomerTotal DESC;

/*
	INSERTING DATA
	
  - Inserting data into a SQL table
	
	If no columns are specified then all values will fill
	the columns from left to right. Otherwise, columns can be
	specified beforehand (in any order) and then the values will
	map to order of the specified columns.
	
	*/
	
INSERT INTO TableName VALUES Col1_Value, Col2_Value, COL3_Value;
INSERT INTO TableName (Column3Name, Column1Name)
VALUES Col3_Value, Col1_Value;