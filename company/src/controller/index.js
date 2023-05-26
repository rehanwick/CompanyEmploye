const Joi = require('joi') ; 

const {creatComapnyUsecase , getComapnyByNameUsecase , deleteComapnyUsecase , getCompanyDetailsByNameUsecase } = require('../usecase')

const makeCreatComanyController = require('./creat-company') ; 
const creatComapnyController = makeCreatComanyController({
    Joi , 
    creatComapnyUsecase 
})

const makeGetCompanyByNameController = require('./get-comapnyby-name.controller') ; 
const getComapnyByNameController = makeGetCompanyByNameController({
    Joi , 
    getComapnyByNameUsecase 
})

const makeDeleteCompanyController = require('./delete-company') ; 
const deleteCompanyController = makeDeleteCompanyController({
    Joi , 
    deleteComapnyUsecase
})

const makeGetCompanyDetailsByNameController = require('./get-companu-details-by-name') ; 
const getCompanyDetailsByNameController = makeGetCompanyDetailsByNameController({
    Joi , 
    getCompanyDetailsByNameUsecase
})

module.exports = {creatComapnyController , getComapnyByNameController , deleteCompanyController , getCompanyDetailsByNameController}