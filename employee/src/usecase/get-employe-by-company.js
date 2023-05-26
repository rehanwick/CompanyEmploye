function MakegetEmployeByCompanyUsecase({
    Joi,
    comapnyByNameInternalService , 
    getEmployeByCompanyId
  }){
    return async function getEmployeByCompanyUsecase({comapnyName}) {
      try {
        validInput({comapnyName});
        let companies = await comapnyByNameInternalService({name : comapnyName}) ; 
        console.log(companies);
        if (companies.length ==0) {
              throw new Error('there is no comapny with the given name ') ; 
        }
       return  await getEmployeByCompanyId({comapnyId : companies[0].id });
      } catch (error) {
        throw error;
      }
    };
  
    function validInput(body) {
      const schema = Joi.object().keys({
        comapnyName : Joi.string() , 
      });
  
      const { error, value } = schema.validate(body);
  
      if (error) {
        throw error;
      }
      return value;
    }
  };
  

  module.exports = MakegetEmployeByCompanyUsecase ; 