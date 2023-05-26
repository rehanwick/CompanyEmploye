 function makeCreateEmployeUsecase({
  Joi,
  createComapnyEntry,
  getComapnyByName
}) {
  return async function createEmployeUsecase({ name, type, country }) {
    try {
      validInput({ name, type, country });
      const companies = await getComapnyByName({name}) ; 
      console.log(companies);
      if (companies.length !=0) {
            throw new Error('already register with the name ') ; 
      }
      await createComapnyEntry({ name, type, country });
    } catch (error) {
      throw error;
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
};


module.exports = makeCreateEmployeUsecase ; 