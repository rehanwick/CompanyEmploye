const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hurairah",
  database: "employe",
});



const makeEmployeDb = require('./companyDb') ; 
const companyDb = makeEmployeDb({mysql:connection.promise()}) ; 

module.exports = companyDb ; 

