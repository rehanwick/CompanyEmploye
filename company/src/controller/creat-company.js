function makeCreatCompanyController({ Joi, creatComapnyUsecase }) {
  return async function creatCompanyController(req, res) {
    try {
      const { name, type, country } = validInput(req.body);
      await creatComapnyUsecase({ name, type, country });
      res.status(201).json({
        status : 'success' , 
        message : 'Company has been register !'
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
      type: Joi.string().trim().required(),
      country: Joi.string().trim().required(),
    });

    const { error, value } = schema.validate(body);

    if (error) {
      throw error;
    }
    return value;
  }
}

module.exports = makeCreatCompanyController;
