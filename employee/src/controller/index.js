const Joi = require('joi') ; 

const { createEmployeUsecase  , deleteEmployeUsingCompanyIdUsecase , getEmployeByCompanyUsecase , updateEmployesDetailsUsecase , deleteEmployeUsecase } = require('../usecase') ; 

const makeCreatEmployeController = require('./creat-employe.controller') ; 
const creatEmployeController = makeCreatEmployeController({
    Joi ,
    createEmployeUsecase
})

const makeDeleteEmployeUsingCompanyIdController = require('./deleteEmploye-with-comapnyId') ; 
const delteEmployeUsingCompanyIdController = makeDeleteEmployeUsingCompanyIdController({
    Joi , 
    deleteEmployeUsingCompanyIdUsecase
})

const makeGetEmployeByComapny = require('./get-emoloye-by-company') ; 
const getEmployeByComapny = makeGetEmployeByComapny({
    Joi , 
    getEmployeByCompanyUsecase
})

const makeupdateEmployeDetailsController = require('./update-employe-details') ; 
const updateEmployeDetailsController = makeupdateEmployeDetailsController({
    Joi , 
    updateEmployesDetailsUsecase
})

const makeDeleteEmployeController = require('./delete-employe.controller') ; 
const delteEmployeController = makeDeleteEmployeController({
    Joi , 
    deleteEmployeUsecase
})

module.exports = {creatEmployeController , delteEmployeUsingCompanyIdController , getEmployeByComapny , updateEmployeDetailsController , delteEmployeController} ; 