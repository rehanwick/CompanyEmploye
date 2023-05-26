function makeGetCompanyByNameController({ Joi,getComapnyByNameUsecase  }) {
    return async function getComapnyByNameController(req, res) {
      try {
        const { name } = validInput(req.body);
        const comapnie = await getComapnyByNameUsecase({ name });
        if (comapnie.length == 0) {
            throw new Error(`NO COMPANIES WITH NAME ${name}`)
        }
        res.status(200).json({
          status : 'success' , 
          message : comapnie
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
      });
  
      const { error, value } = schema.validate(body);
  
      if (error) {
        throw error;
      }
      return value;
    }
  }
  
  module.exports = makeGetCompanyByNameController;
  