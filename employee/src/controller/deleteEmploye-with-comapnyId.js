function makeDeleteEmployeUsingCompanyIdController({ Joi, deleteEmployeUsingCompanyIdUsecase }) {
    return async function delteEmployeUsingCompanyIdController(req, res) {
      try {
        const { comapnyId } = validInput(req.body);
        await deleteEmployeUsingCompanyIdUsecase({ comapnyId });
        res.status(201).json({
          status : 'success' , 
          message : 'all the employe of comapny has been deleted !'
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
        comapnyId : Joi.number().integer().required() , 
      });
  
      const { error, value } = schema.validate(body);
  
      if (error) {
        throw error;
      }
      return value;
    }
  }
  
  module.exports = makeDeleteEmployeUsingCompanyIdController;
  