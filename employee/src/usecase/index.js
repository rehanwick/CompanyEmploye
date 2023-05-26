const Joi = require('joi') ; 
const axios = require('axios') ; 

const { createEmployeEntry , deleteEmployeWithCompanyId , getEmployeByCompanyId , updateEmployesDetails , deleteEmploye} = require('../data-access') ;
const { comapnyByNameInternalService } = require('../internal-service-call')




const makeCreateEmployeUsecase =require('./creat-employe.usecase')
const createEmployeUsecase = makeCreateEmployeUsecase({
    Joi , 
    createEmployeEntry , 
    comapnyByNameInternalService
})

const makeDeleteEmployeUsingCompanyIdUsecase = require('./delete-employe-with-companyId') ; 
const deleteEmployeUsingCompanyIdUsecase = makeDeleteEmployeUsingCompanyIdUsecase({
    Joi , 
    deleteEmployeWithCompanyId
})

const MakegetEmployeByCompanyUsecase = require('./get-employe-by-company') ; 
const getEmployeByCompanyUsecase = MakegetEmployeByCompanyUsecase({
    Joi , 
    getEmployeByCompanyId ,
    comapnyByNameInternalService
})

const makeupdateEmpoyesDetailsUsecase = require('./update-employes-details.usecase') ; 
const updateEmployesDetailsUsecase = makeupdateEmpoyesDetailsUsecase({
    Joi , 
    updateEmployesDetails
})

const makeDeleteEmployeUsecase =  require('./delete-employe.usecase') ; 
const deleteEmployeUsecase = makeDeleteEmployeUsecase({
    Joi , 
    deleteEmploye
})

module.exports = {createEmployeUsecase ,deleteEmployeUsecase,  deleteEmployeUsingCompanyIdUsecase , getEmployeByCompanyUsecase , updateEmployesDetailsUsecase} ; 