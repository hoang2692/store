import axios from 'axios';

const API_DOMAIN='http://dboi.info'


export default function CallAPI(endpoint, method= 'GET', body){
    return axios({
        method: method,
        url: `${API_DOMAIN}/${endpoint}`,
        data: body
    }).catch(erro =>{
        console.log(erro);
    })
}