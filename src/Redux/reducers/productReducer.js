import * as ActionType from "../constants/productconstant.js"
const initialState = {
  products: [],

  isEditing: false,
  productEdited: null,
}
export const addProductsReducer=(state= initialState, action)=>{

switch(action.type){
    case ActionType.GET_PRODUCTS_SUCCESS:
      return { isEditing: false, productEdited: null, products: action.payload}
    case ActionType.GET_PRODUCTS_FAIL:
      return {err: action.payload}
    default:
        return state
}

}
export const getProductsReducer=(state= initialState , action)=>{

switch(action.type){
    case ActionType.GET_PRODUCTSdata_SUCCESS:
      return { isEditing: false, productEdited: null, products: action.payload}
    case ActionType.GET_PRODUCTSdata_FAIL:
      return {err: action.payload}
    default:
        return state
}

}
export const editProductsReducer=(state= initialState , action)=>{

switch(action.type){
    case ActionType.Edit_PRODUCTSdata_SUCCESS:
      return { isEditing: true, productEdited: action.payload}
    case ActionType.Edit_PRODUCTSdata_FAIL:
      return {err: action.payload}
    default:
        return state
}

}
export const updateProductsReducer=(state= initialState , action)=>{

switch(action.type){
    case ActionType.update_PRODUCTSdata_SUCCESS:
      return { isEditing: false, productEdited: null, products: action.payload}
    case ActionType.update_PRODUCTSdata_FAIL:
      return {err: action.payload}
    default:
        return state
}

}
export const deleteProductsReducer=(state= initialState , action)=>{

switch(action.type){
    case ActionType.delete_PRODUCTSdata_SUCCESS:
      return { isEditing: false, productEdited: null, products: action.payload}
    case ActionType.delete_PRODUCTSdata_FAIL:
      return {err: action.payload}
    default:
        return state
}

}