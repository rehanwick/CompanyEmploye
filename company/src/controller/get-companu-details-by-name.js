function makeGetCompanyDetailsByNameController({ Joi , getCompanyDetailsByNameUsecase }) {
  return async function getCompanyDetailsByNameController(req, res) {
    try {
      const { name } = validInput(req.params);
      const comapny = await getCompanyDetailsByNameUsecase({name});
      if (comapny.length == 0) {
        throw new Error(`No comapny with name ${name}`)
      }
      res.status(200).json({
        status : 'success' , 
        message : comapny 
      })
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  function validInput(input) {
    const schema = Joi.object().keys({
      name: Joi.string().required(),
    });

    const { error, value } = schema.validate(input);
    if (error) {
      throw error;
    }
    return value;
  }
}


module.exports = makeGetCompanyDetailsByNameController ; 