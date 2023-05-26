function makeCreateEmployeUsecase({
    Joi,
    createEmployeEntry,
    comapnyByNameInternalService
  }){
    return async function createEmployeUsecase({ name, lastName , designation , companyName}) {
      try {
        validInput({ name, lastName , designation , companyName});
        let companies = await comapnyByNameInternalService({name : companyName}) ; 
        console.log(companies);
        if (companies.length ==0) {
              throw new Error('there is no comapny with the given name ') ; 
        }
        console.log(companies[0].id);
        await createEmployeEntry({ name, lastName , designation , comapnyId : companies[0].id });
      } catch (error) {
        throw error;
      }
    };
  
    function validInput(body) {
      const schema = Joi.object().keys({
        name: Joi.string().trim().required(),
        lastName: Joi.string().trim().required(),
        designation: Joi.string().trim().required(),
        companyName: Joi.string().trim().required()
      });
  
      const { error, value } = schema.validate(body);
  
      if (error) {
        throw error;
      }
      return value;
    }
  };
  

  module.exports = makeCreateEmployeUsecase ; 