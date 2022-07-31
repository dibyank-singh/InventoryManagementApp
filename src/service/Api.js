import axios from "axios";

const url='http://localhost:5000'
export const adduser= async(data)=>{
    try{
        return await axios.post(`${url}/signup`,data)
    }catch(err){
        console.log("error while calling signupuser" ,err)
    }
}
export const callinguser= async(data)=>{
    try{
        return await axios.post(`${url}/login`,data)
    }catch(err){
        console.log("error while calling loginuser" ,err)
    }
}