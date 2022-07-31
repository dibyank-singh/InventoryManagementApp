import axios from "axios"
import * as ActionType from "../constants/productconstant.js"

const url="http://localhost:5000";
export const  addProducts=(addproduct)=> async(dispatch)=>{ 
    try{
   let {data}=await axios.post(`${url}/dashbord/add`,addproduct)
   console.log(data)  
    dispatch({type:ActionType.GET_PRODUCTS_SUCCESS, payload:data})
    }catch(err){
        dispatch({type:ActionType.GET_PRODUCTS_FAIL, payload:err.message})  
        console.log("Error while calling addproduct api")
    }
}
export const  getProducts=()=> async(dispatch)=>{ 
    try{
   let {data}=await axios.get(`${url}/dashbord`)
   console.log(data)  
    dispatch({type:ActionType.GET_PRODUCTSdata_SUCCESS, payload:data})
    }catch(err){
        dispatch({type:ActionType.GET_PRODUCTSdata_FAIL, payload:err.message})  
        console.log("Error while calling getproduct api")
    }
}
export const  editProduct=(product)=> async(dispatch)=>{ 
    dispatch({
        type:ActionType.Edit_PRODUCTSdata_SUCCESS,
        payload: product
    })
}
export const updateProduct=(updatededProduct)=> async(dispatch)=>{ 
    try{
   let {data}=await axios.post(`${url}/dashbord/update/${updatededProduct._id}`,updatededProduct)
   console.log(data)  
    dispatch({type:ActionType.update_PRODUCTSdata_SUCCESS, payload:data})
    }catch(err){
        dispatch({type:ActionType.update_PRODUCTSdata_FAIL, payload:err.message})  
        console.log("Error while calling updateproduct api")
    }
}
export const deleteProduct=(id)=> async(dispatch)=>{ 
    try{
   let {data}=await axios.delete(`${url}/dashbord/${id}`)
   console.log(data)  
    dispatch({type:ActionType.delete_PRODUCTSdata_SUCCESS, payload:data})
    }catch(err){
        dispatch({type:ActionType.delete_PRODUCTSdata_FAIL, payload:err.message})  
        console.log("Error while calling Deleteproduct api")
    }
}