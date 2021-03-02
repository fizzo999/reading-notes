# SQL Database

## resources


+ https://openlibra.com/en/book/a-primer-on-sql-3rd-edition
+ https://sqlbolt.com/
+ https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all
+ http://www.cheat-sheets.org/sites/sql.su/

### What is SQL?

SQL, or Structured Query Language, is a language designed to allow both technical and non-technical users query, manipulate, and transform data from a relational database. And due to its simplicity, SQL databases provide safe and scalable storage for millions of websites and mobile applications.

### Relational databases
Before learning the SQL syntax, it's important to have a model for what a relational database actually is. A relational database represents a collection of related (two-dimensional) tables. Each of the tables are similar to an Excel spreadsheet, with a fixed number of named columns (the attributes or properties of the table) and any number of rows of data.

For example, if the Department of Motor Vehicles had a database, you might find a table containing all the known vehicles that people in the state are driving. This table might need to store the model name, type, number of wheels, and number of doors of each vehicle for example.

In such a database, you might find additional related tables containing information such as a list of all registered drivers in the state, the types of driving licenses that can be granted, or even driving violations for each driver.

By learning SQL, the goal is to learn how to answer specific questions about this data, like "What types of vehicles are on the road have less than four wheels?", or "How many models of cars does Tesla produce?", to help us make better decisions down the road.

 (Links to an external site.)What is SQL
SQL: Structured Query Language, is a language designed to allow both technical an non-technical users query, manipulate, and transform data. Thanks to it's simplicity, SQL databases provide a safe and scalable storage for millions of websites and mobile applications.
 (Links to an external site.)Relational Databases
Before we dive into SQL syntax, it is important to have a model for what a relational database is. A relational database represents a collection of related tables which are similar to an excel spreadsheet.

With databases, you may find additional related tables containing information such as a list of all registered vehicles in a state, what type of license is granted, or even the number of driving violations.

 (Links to an external site.)About the lesson
Most users will be learning SQL to interact with existing database, the lesson starts by introducing you to various parts of an SQL query. As you progress the lessons will show you how to alter a table and create new ones from scratch.
 (Links to an external site.)Lesson 1 - Select Queries
To retrieve data from a SQL we need to write SELECTS statements, which are often referred to as queries.
Example:

SELECT * FROM mytable;

In the example above we are selecting all items from the mytable
 (Links to an external site.)Lesson 2 - Queries with Constraints (Pt.1)
Now that we can select for specific columns of data from a table, but if you had a table with tons of data, reading through would be very inefficient. To filter certain results from being returned, we use a WHERE clause in the query.
Example:

SELECT column, another_column, FROM mytable WHERE condition AND/OR another_condition AND/OR;

More complex clauses can be constructed by joining numerous AND or OR logical keywords.
Example:

num_wheels >= 4 AND doors <= 2

Probably a little confused right? What that is doing is: The number of wheels less than or equal to 4 AND greater than or equal to 2 doors.

Table of Operators:

=, !=, <, <=, >, >= (Standard Numerical Operators)

col_name !=4 (SQL Example)

BETWEEN ...AND... (Number is within rang of two values(inclusive))

col_name BETWEEN 1.5 and 10.5 (SQL Example)

NOT BETWEEN...AND (Number is not within range of two values(inclusive))

col_name BETWEEN 1 AND 10 (SQL Example)

IN(...) (Number exists in a list)

col_name IN (2,4,6) (SQL Example)

NOT IN(...) (Number does not exist in a list)

col_name NOT IN(1, 3, 5)

This makes the results more manageable to understand, writing clauses to contain the set of rows returned also allows the query to run faster due to the reduction in unnecessary data being returned.

 (Links to an external site.)Lesson 3 - Queries with constraints (Pt.2)
When we use the WHERE clauses with columns containing text data, SQL supports a number of useful operators to do the things like case-insensitive string comparison or wildcard pattern matching.

Table of Operators:

= (Case sensitive exact string comparison)

col_name = "abc" (SQL Example)

!= or <> (Case sensitive exact string inequality comparison)

col_name != "abcd" (SQL Example)

LIKE (Case insensitive exact string comparison)

col_name LIKE "ABC" (SQL Example)

NOT LIKE (Case insensitive exact string inequality comparison)

col_name NOT LIKE "ABCD" (SQL Example)

% (Used anywhere in a string to match a sequence of zero or more characters (only with LIKE or NOT LIKE))

col_name LIKE "%AT%" (matches "AT", "ATTIC", "CAT" or even "BATS") (SQL Example)

_ (Used anywhere in a string to match a single character (only with LIKE or NOT LIKE))

col_name LIKE "AN_" (matches "AND", but not "AN") (SQL Example)

IN (…) (String exists in a list)

col_name IN ("A", "B", "C") (SQL Example)

NOT IN (…) (String does not exist in a list)

col_name NOT IN ("D", "E", "F") (SQL Example)

 (Links to an external site.)Lesson 4 - Filtering and sorting Query results
Though data within a database may be unique, the results of any particular query may not be. SQL provides a convenient way to remove rows that have duplicated column values using the DISTINCT keyword.
Example:

SELECT DISTINCT column, another_column, FROM mytable WHERE condition(s);

The distinct keyword will remove the duplicated rows and in a future lesson we will learn how to discard duplicates based on specific columns by using GROUP BY clause.
 (Links to an external site.)Ordering Results
Unlike the neatly ordered table in the las few lessons, some data in actual databases are adding in no particular column order. This can make it difficult to read through and understand the results of a query as the size of a table. To solve this we use SQL to sort your results by a given column in ascending or descending order using the ORDER BY clause.
Example:

SELECT column, another_column FROM mytable WHERE condition(s) ORDER BY column ASC/DESC;

When you declare an ORDER BY clause each row is sorted alpha-numerically based on the specific column's value. In some databases, you can also specify a collation to better sort data.
 (Links to an external site.)Limiting Results
Another way to sort is the LIMIT and OFFSET clauses, which are useful optimization to indicate the subset of the results you care about.
LIMIT Will reduce the number of rows to return. OFFSET Will specify where to begin counting the number of rows from.

Example:
SELECT column, another_column FROM mytable WHERE condition(s) ORDER BY column ASC/DESC LIMIT num_limit OFFSET num_offset;

 (Links to an external site.)Inserting new data
Examples:

INSERT INTO mytable VALUES (value_or_expr, another_value_or_expr, …), (value_or_expr_2, another_value_or_expr_2, …), …;

In some cases you have incomplete data and the table contains columns that support default values, that you can insert rows with only the columns of data.
INSERT INTO mytable (column, another_column, …) VALUES (value_or_expr, another_value_or_expr, …), (value_or_expr_2, another_value_or_expr_2, …), ;

With some cases the number of values needs to match the number of columns specified.

Example:

INSERT INTO boxoffice (movie_id, rating, sales_in_millions) VALUES (1, 9.9, 283742034 / 1000000);

 (Links to an external site.)Lesson 14 - Updating rows
In addition to adding new data, a common task it to update existing data, which can be done using an UPDATE statement. This is similar to the INSERT statement, for which you have to specify exactly which table, columns, and rows to update.

Example:

UPDATE mytable SET column = value_or_expr, other_column = another_value_or_expr, … WHERE condition;

 (Links to an external site.)Lesson 15 - Deleting Rows
When you need to delete data from a table in the database, you can use a DELETE statement, which describe the table to act on, and the rows of the table to delete through a WHERE clause.

Example:

DELETE FROM mytable WHERE condition;

 (Links to an external site.)Lesson 16 - Creating the table
As you have new entities and relationship to store in your database, you can create a new database using the CREATE TABLE statement.

Example:

CREATE TABLE IF NOT EXISTS mytable ( column DataType TableConstraint DEFAULT default_value, another_column DataType TableConstraint DEFAULT default_value, );

 (Links to an external site.)Table Data Types
Databases support different data types, but the common types support numeric, string, and other miscellaneous thing like dates, booleans, or even binary data.

INTEGER, BOOLEAN

The integer datatypes can store whole integer values like the count of a number or an age. In some implementations, the boolean value is just represented as an integer value of just 0 or 1.

FLOAT, DOUBLE, REAL

The floating point datatypes can store more precise numerical data like measurements or fractional values. Different types can be used depending on the floating point precision required for that value.

CHARACTER(num_chars), VARCHAR(num_chars), TEXT

The text based datatypes can store strings and text in all sorts of locales. The distinction between the various types generally amount to underlaying efficiency of the database when working with these columns.

Both the CHARACTER and VARCHAR (variable character) types are specified with the max number of characters that they can store (longer values may be truncated), so can be more efficient to store and query with big tables.

DATE, DATETIME

SQL can also store date and time stamps to keep track of time series and event data. They can be tricky to work with especially when manipulating data across timezones.

BLOB

Finally, SQL can store binary data in blobs right in the database. These values are often opaque to the database, so you usually have to store them with the right metadata to require them.

 (Links to an external site.)Table Constraints
We won't dive too deep into table constraints in this lesson, but each column can have additional table constraints on it to limit what values can be inserted into that column.

PRIMARY KEY

This means that the values in this column are unique, and each value can be used to identify a single row in this table.

AUTOINCREMENT

For integer values, this means that the value is automatically filled in and incremented with each row insertion. Not supported in all databases.

UNIQUE

This means that the values in this column have to be unique, so you can't insert another row with the same value in this column as another row in the table. Differs from the PRIMARY KEY in that it doesn't have to be a key for a row in the table.
NOT NULL

This means that the inserted value can not be NULL.

CHECK (expression) This allows you to run a more complex expression to test whether the values inserted are valid. For example, you can check that values are positive, or greater than a specific size, or start with a certain prefix, etc.

FOREIGN KEY

This is a consistency check which ensures that each value in this column corresponds to another value in a column in another table.

For example, if there are two tables, one listing all Employees by ID, and another listing their payroll information, the FOREIGN KEY can ensure that every row in the payroll table corresponds to a valid employee in the master Employee list.

 (Links to an external site.)Adding Columns
ALTER TABLE mytable ADD column DataType OptionalTableConstraint DEFAULT default_value;

 (Links to an external site.)Removing Columns
ALTER TABLE mytable DROP column_to_be_deleted;

 (Links to an external site.)Renaming the table
ALTER TABLE mytable RENAME TO new_table_name;

 (Links to an external site.)Lesson 18 - Dropping tables
In some cases you may want to remove an entire table including all of its data and metadata, and to do so, use the DROP TABLE statement.
Example:

DROP TABLE IF EXISTS mytable;




[Back to ReadMe](../README.md)