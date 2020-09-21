import axios from "axios";
class  AxiosService{
    constructor(){
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess,this.handleErr);
        this.instance=instance;
    }
    handleSuccess(response){
        return response;
    }
    handleErr(errr){
        return Promise.reject(errr);
    }
    get(url) {
        return this.instance.get(url);
    }
}
 export default new AxiosService();