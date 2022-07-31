import {createStore, combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { addProductsReducer } from "./Redux/reducers/productReducer";
import { getProductsReducer } from "./Redux/reducers/productReducer";
import { editProductsReducer } from "./Redux/reducers/productReducer";
import {deleteProductsReducer} from "./Redux/reducers/productReducer";
import { updateProductsReducer } from "./Redux/reducers/productReducer";

const reducer= combineReducers({
    addProducts: addProductsReducer,
    getProducts:getProductsReducer,
    editProduct:editProductsReducer,
    deleteProduct:deleteProductsReducer,
    updateProduct:updateProductsReducer,

})

const initialState={}

const middleware=[thunk];

const store=createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware(...middleware))
);

export default store;

