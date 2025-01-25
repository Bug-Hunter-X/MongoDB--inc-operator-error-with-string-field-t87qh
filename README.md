# MongoDB $inc operator error with string field
This repository demonstrates a common error when using the `$inc` operator in MongoDB: attempting to increment a field that is not a number.

The `bug.js` file shows the incorrect code that throws an error. The `bugSolution.js` file shows the corrected code.

## Problem
Attempting to increment a string field using `$inc` results in a database error.

## Solution
Ensure the field you're incrementing is of type Number (int or double). If the field is currently a string, update the document to change the field type to a number before using `$inc`.