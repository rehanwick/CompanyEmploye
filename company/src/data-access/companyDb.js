const comapny_table = "comapnies";

function makeComapnyDb({ mysql }) {
  return Object.freeze({
    createComapnyEntry,
    getComapnyByName , 
    deleteCompany , 
    getCompanydetailsByName
  });

  async function createComapnyEntry({ name, type, country }) {
    const [result] = await mysql.query(
      `INSERT INTO ${comapny_table}(name , type , country  ) values (? , ? , ? )`,
      [name , type , country]
    );
    return result;
  }

  async function getComapnyByName({ name}) {
    const [result] = await mysql.query(
      `Select * from  ${comapny_table} WHERE name = ? `,
      [name]
    );
    return result;
  }

  async function deleteCompany({id}){
    const [result] = await mysql.query(`DELETE FROM ${comapny_table} WHERE id = ?;` , [id]) ; 
    return result ; 
  }

  async function getCompanydetailsByName({name}){
    const [result] = await mysql.query(`select * from ${comapny_table} where name = ?;`,[name])
    return result ; 
  }

}

module.exports = makeComapnyDb;
