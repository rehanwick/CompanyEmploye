const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hurairah",
  database: "company",
});



const makeComapnyDb = require('./companyDb') ; 
const companyDb = makeComapnyDb({mysql:connection.promise()}) ; 

module.exports = companyDb ; 

