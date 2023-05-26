function makeupdateEmployesDetailsUsecase({
    Joi,
    updateEmployesDetails , 
  }){
    return async function updateEmployesDetailsUsecase({id , name, lastName , designation , companyName}) {
      try {
        validInput({id , name, lastName , designation , companyName});
        const arr = [] ; 
        arr.push(name) ; arr.push(lastName) ; arr.push(designation) ; arr.push(companyName) ; 
       return  await updateEmployesDetails({id , arr }) ; 
      } catch (error) {
        throw error;
      }
    };
  
    function validInput(body) {
      const schema = Joi.object().keys({
        name: Joi.string().trim(),
        lastName: Joi.string().trim(),
        designation: Joi.string().trim(),
        companyName: Joi.string().trim()
      });
  
      const { error, value } = schema.validate(body);
  
      if (error) {
        throw error;
      }
      return value;
    }
  };
  

  module.exports = makeupdateEmployesDetailsUsecase ; 