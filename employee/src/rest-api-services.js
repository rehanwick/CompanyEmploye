const express = require("express");
const router = express.Router();
const controller = require("./controller");

function init() { 
   initEmploye() ;
   initInternalServices() ;  
}


function initEmploye() {  
    router.post("/employe" , controller.creatEmployeController) ; 
    router.get('/employe/:comapnyName' , controller.getEmployeByComapny) ; 
    router.put('/employe', controller.updateEmployeDetailsController ) ; 
    router.delete('/employe/:id', controller.delteEmployeController) ; 
}

function initInternalServices(){
    router.delete("/employe" , controller.delteEmployeUsingCompanyIdController)

}


init();




module.exports = router;
