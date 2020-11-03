const baseUrl = 'http://citymani.ezrdv.org/main'

export default {
  post: (url: string, body: object) =>
    new Promise((resolve,reject) =>{

      fetch(baseUrl + url, {
        method: 'POST',
        body: JSON.stringify(body)
      }).then(res => {
        return resolve(res.json())
      }).catch((err)=> {
         return reject(err)
      })
    }),
  get: (url: string, body: object) =>
    fetch(baseUrl + url, {
      method: 'GET',
      body: JSON.stringify(body)
    }).then(res => res.json())
}
