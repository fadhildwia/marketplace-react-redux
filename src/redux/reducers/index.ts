import { combineReducers } from "redux"
import { producerReducer, selectedProductReducer } from "./productReducer"

export const reducers = combineReducers({
  allProducts: producerReducer,
  product: selectedProductReducer
})