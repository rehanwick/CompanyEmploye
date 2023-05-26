const Joi = require("joi");

const makeEmployeEntity = require("./employe");
const employeTable = makeEmployeEntity({
  Joi,
});


module.exports = { employeTable}