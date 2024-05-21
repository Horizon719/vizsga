import axios from "axios";

class DataService{
    constructor(){
        axios.defaults.baseURL = "http://localhost:8000/api";
    }
    get(vegpont, callbackFn, errorFn = (param) => {}){
        axios.get(vegpont)
            .then(response =>{
                callbackFn(response);
            })
            .catch(error =>{
                errorFn(error);
            })
    }
}

export default DataService;
