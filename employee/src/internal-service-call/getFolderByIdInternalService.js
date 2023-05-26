function makegetCompanybyNameInternalService({axios, config}) {
    return async function comapnyByNameInternalService({name}) {
      return axios({
        method: 'get',
        url: `${config.comapny}/company`,
        data : {
            name : name 
        }
      }).then(function(response) {
        if (response.status === 200) {
          return response.data.message ;
        } else {
          throw new Error(`no company with name `)
        }
      }).catch((error) =>{
        throw new Error('No comapny found')
      })
    
    };
  };
  
  module.exports = makegetCompanybyNameInternalService ; 