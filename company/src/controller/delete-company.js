function makeDeleteCompanyController({ Joi, deleteComapnyUsecase }) {
  return async function deleteCompanyController(req, res) {
    try {
      const { id } = validInput(req.body);
      const result = await deleteComapnyUsecase({ id });
      if (result.affectedRows == 0) {
        throw new Error(`No comapny with id = ${id}`);
      }
      res.status(201).json({
        status: "success",
        message: "Company has been deleted !",
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  function validInput(body) {
    const schema = Joi.object().keys({
      id: Joi.number().integer().required(),
    });

    const { error, value } = schema.validate(body);

    if (error) {
      throw error;
    }
    return value;
  }
}

module.exports = makeDeleteCompanyController;
