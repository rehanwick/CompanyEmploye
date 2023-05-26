function makeDeleteEmployeUsecase({
    Joi,
    deleteEmploye
  }){
    return async function deleteEmployeUsecase({ id}) {
      try {
        validInput({ id});
        const result =  await deleteEmploye({id}) ; 
        if(result.affectedRows == 0)
        {
            throw new Error(`No employe with id = ${id}`)
        }
      } catch (error) {
        throw error;
      }
    };
  
    function validInput(body) {
      const schema = Joi.object().keys({
        id : Joi.number().integer() , 
      });
  
      const { error, value } = schema.validate(body);
  
      if (error) {
        throw error;
      }
      return value;
    }
  };
  

  module.exports = makeDeleteEmployeUsecase ; 