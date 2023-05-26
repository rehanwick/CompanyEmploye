function makeEmployeEntity({ Joi }) {
  return function employeTable({
    name,
    country,
    companyID,
    lastName,
    email,
    designation,
  }) {
    const schema = Joi.object({
      name: Joi.string().min(2).allow(""),
      companyID: Joi.number().integer().allow(""),
      lastName: Joi.string().min(2).allow(""),
      email: Joi.email().allow(""),
      designation: Joi.string().min(2).allow(""),
    });

    const { value, error } = schema.validate({
      name,
      country,
      companyID,
      lastName,
      email,
      designation,
    });

    if (error) {
      throw error.message;
    }

    return Object.freeze({
      name : value.name,
      country : value.country,
      companyID : value.companyID,
      lastName : value.lastName,
      email : value.email,
      designation : value.designation,
    });
  };
};

module.exports = makeEmployeEntity ; 