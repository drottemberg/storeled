import axios from 'axios';


const baseUrl = "https://api.smartawnings.com";

export default {
  post: (url:string, body: object, config: object) =>
      axios.post(baseUrl + url, body, config)
          .then(res => { }),
  get: (url:string, body: object, config: object) =>
      axios.get(baseUrl + url, body)
          .then(res => { }),
}
