function MakedeleteComapnyEmploye({axios, config}) {
    return async function deleteComapnyEmployee({id}) {
      return axios({
        method: 'delete',
        url: `${config.comapnyServer}/employe`,
        data : {
            comapnyId : id 
        }
      }).then(function(response) {
        if (response.status === 200) {
          return response.data.message ;
        } else {
          return false;
        }
      });
    };
  };
  
  module.exports = MakedeleteComapnyEmploye ; 