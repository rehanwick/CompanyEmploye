const axios = require('axios') ; 
const config = require('../config/index')

const url = config.comapny ; 
console.log(url); ; 

const makegetCompanybyNameInternalService = require('./getFolderByIdInternalService') ; 

const comapnyByNameInternalService = makegetCompanybyNameInternalService({
    axios , 
    config
})


module.exports = {comapnyByNameInternalService}