function makeDeleteEmployeController({ Joi, deleteEmployeUsecase }) {
    return async function delteEmployeController(req, res) {
        try {
        const { id } = validInput(req.params);
        await deleteEmployeUsecase({ id });
        res.status(201).json({
          status : 'success' , 
          message : `employe with ${id} has been deleted !`
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
        id : Joi.number().integer().required() , 
      });
  
      const { error, value } = schema.validate(body);
  
      if (error) {
        throw error;
      }
      return value;
    }
  }
  
  module.exports = makeDeleteEmployeController;
  