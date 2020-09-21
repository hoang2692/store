import axios from 'axios'
import * as apicall from '../contants/ConfigAPI';


export default function callAPI(endpoint, method ='GET', body){
    return axios({
        method:method,
        url: `${apicall.API_CALL}/${endpoint}`,
        data: body
      }).catch(erro =>{
        console.log(erro)
      })
    }