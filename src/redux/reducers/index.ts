import { combineReducers } from "redux"
import { productListReducer, productDetailsReducer } from "./productReducer"

export const reducers = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer
})