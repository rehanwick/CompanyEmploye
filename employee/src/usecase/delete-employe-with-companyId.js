function makeDeleteEmployeUsingCompanyIdUsecase({
    Joi,
    deleteEmployeWithCompanyId
  }){
    return async function deleteEmployeUsingCompanyIdUsecase({ comapnyId}) {
      try {
        validInput({ comapnyId});
         await deleteEmployeWithCompanyId({comapnyId}) ; 
      } catch (error) {
        throw error;
      }
    };
  
    function validInput(body) {
      const schema = Joi.object().keys({
        comapnyId : Joi.number().integer() , 
      });
  
      const { error, value } = schema.validate(body);
  
      if (error) {
        throw error;
      }
      return value;
    }
  };
  

  module.exports = makeDeleteEmployeUsingCompanyIdUsecase ; 