const config = require('../config') ; 
const axios = require('axios') ; 

const MakedeleteComapnyEmploye = require('./delete-company-employe.InternalComapny') ; 
const deleteComapnyEmployee = MakedeleteComapnyEmploye({
    config , 
    axios 
})

module.exports = {deleteComapnyEmployee}