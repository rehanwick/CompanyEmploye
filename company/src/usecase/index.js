const Joi = require("joi");
const { createComapnyEntry, getComapnyByName , deleteCompany , getCompanydetailsByName} = require("../data-access");
const {deleteComapnyEmployee } = require('../internal-service-call') ; 

const makeGetCompanyByNameUsecase = require("./get-comapny-byname.usecase");
const getComapnyByNameUsecase = makeGetCompanyByNameUsecase({
  Joi,
  getComapnyByName,
});

const makeCreateEmployeUsecase = require("./creat-employe.usecase");
const creatComapnyUsecase = makeCreateEmployeUsecase({
  Joi,
  createComapnyEntry,
  getComapnyByName
});

const makeDeleteComapnyUsecase = require('./delete-company.usecase') ; 
const deleteComapnyUsecase = makeDeleteComapnyUsecase({
    Joi , 
    deleteCompany , 
    deleteComapnyEmployee
})

const makegetCompanyDetailsByNameUsecase = require('./get-comapny-details-by-name.usecase') ; 
const getCompanyDetailsByNameUsecase = makegetCompanyDetailsByNameUsecase({
    Joi , 
    getCompanydetailsByName
})

module.exports = { creatComapnyUsecase, getComapnyByNameUsecase , deleteComapnyUsecase , getComapnyByName , getCompanyDetailsByNameUsecase };
