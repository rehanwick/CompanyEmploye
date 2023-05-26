const express = require("express");
const router = express.Router();
const controller = require("./controller");

function init() { 
   initEmploye() ; 
   initInternalService() ; 
}


function initEmploye() {  
    router.post("/company" , controller.creatComapnyController) ;
    router.delete("/company" , controller.deleteCompanyController) ; 
    router.get("/company/:name" , controller.getCompanyDetailsByNameController)
}

function initInternalService(){
    router.get("/company" , controller.getComapnyByNameController) ; 
}

init();




module.exports = router;
