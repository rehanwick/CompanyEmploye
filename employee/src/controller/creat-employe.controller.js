function makeCreatEmployeController({ Joi, createEmployeUsecase }) {
    return async function creatEmployeController(req, res) {
      try {
        const { name, lastName , designation , companyName } = validInput(req.body);
        await createEmployeUsecase({ name, lastName, designation , companyName });
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
  }
  
  module.exports = makeCreatEmployeController;
  