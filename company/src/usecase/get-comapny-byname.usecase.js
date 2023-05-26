function makeGetCompanyByNameUsecase({ Joi, getComapnyByName }) {
  return async function getComapnyByNameUsecase({ name }) {
    try {
      validInput({name});
      const comapnies = await getComapnyByName({ name });
      return comapnies;
    } catch (error) {
      throw error;
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
  }
}

module.exports = makeGetCompanyByNameUsecase;
