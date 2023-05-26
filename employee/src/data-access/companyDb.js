const employe_table = "employes";

function makeEmployeDb({ mysql }) {
  return Object.freeze({
    createEmployeEntry,
    deleteEmployeWithCompanyId ,
    getEmployeByCompanyId , 
    updateEmployesDetails ,
    deleteEmploye
  });

  async function createEmployeEntry({ comapnyId , name, lastName, designation }) {
    const [result] = await mysql.query(
      `INSERT INTO ${employe_table}(companyID , name , lastName , designation  ) values ( ? , ? , ? , ? )`,
      [ comapnyId, name , lastName , designation]
    );
    return result;
  }

  async function deleteEmployeWithCompanyId({comapnyId}){
    const [result] = await mysql.query( `DELETE FROM ${employe_table} WHERE companyID = ?;` , [comapnyId])
    return result ; 
  }

  async function getEmployeByCompanyId({comapnyId}){
    const [result] = await mysql.query(`Select * from ${employe_table} where companyID = ?` , [comapnyId]) ; 
    return result ; 
  }

  async function updateEmployesDetails({id , arr }){
    const [result] = await mysql.query(`UPDATE ${employe_table} SET ${arr} WHERE id =  ? ; ` ,[id]) ; 
    return result ; 
  }

  async function deleteEmploye({id}){
    const [result] = await mysql.query(`delete from ${employe_table} where id =? ` ,[id]) ; 
    return result ; 
  }

}

module.exports = makeEmployeDb;
