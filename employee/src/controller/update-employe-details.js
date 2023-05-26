function makeupdateEmployeDetailsController({ Joi, updateEmployesDetailsUsecase }) {
    return async function updateEmployeDetailsController(req, res) {
      try {
        const { id , name, lastName , designation , companyName } = validInput(req.body);
        await updateEmployesDetailsUsecase({ id ,  name, lastName, designation , companyName });
        res.status(201).json({
          status : 'success' , 
          message : 'employe has been register !'
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
  }
  
  module.exports = makeupdateEmployeDetailsController;
  