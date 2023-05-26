function makeGetEmployeByComapny({ Joi, getEmployeByCompanyUsecase }) {
    return async function getEmployeByComapny(req, res) {
      try {
          console.log(req.params);
          const { comapnyName } = validInput(req.params);
        const employes = await getEmployeByCompanyUsecase({ comapnyName });
        if (employes.length == 0 ) {
            throw new Error('No employes in the company !')
        }
        res.status(200).json({
          status : 'success' , 
          message : employes
        })
      } catch (error) {
        res.status(500).json({
          status: "error",
          message: error.message,
        });
      }
    };
  
    function validInput(body) {
      const schema = Joi.object().keys({
        comapnyName : Joi.string().required() , 
      });
  
      const { error, value } = schema.validate(body);
  
      if (error) {
        throw error;
      }
      return value;
    }
  }
  
  module.exports = makeGetEmployeByComapny;
  