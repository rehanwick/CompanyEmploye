function makegetCompanyDetailsByNameUsecase({ Joi, getCompanydetailsByName }) {
  return async function getCompanyDetailsByNameUsecase({ name }) {
    try {
      validInput({ name });
      const comapny = await getCompanydetailsByName({ name });
      return comapny;
    } catch (error) {
      throw error;
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

module.exports = makegetCompanyDetailsByNameUsecase;
