function makeDeleteComapnyUsecase({
    Joi,
    deleteCompany,
    deleteComapnyEmployee
  }) {
    return async function deleteCompanyUsecase({id }) {
      try {
        validInput({id});
       const result =  await deleteCompany({id});
        await deleteComapnyEmployee({id}) ; 
        return result ; 
      } catch (error) {
        throw error;
      }
    };
  
    function validInput(body) {
      const schema = Joi.object().keys({
        id : Joi.number().integer().required()
      });
  
      const { error, value } = schema.validate(body);
  
      if (error) {
        throw error;
      }
      return value;
    }
  };

  module.exports = makeDeleteComapnyUsecase ; 
  