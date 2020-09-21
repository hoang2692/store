
import axiosService from "../Commons/axiosSever";
import { API} from "../Constants";

const url = "comments ";

export const getList = () =>{
    return axiosService.get(`${API}/${url}`);
};