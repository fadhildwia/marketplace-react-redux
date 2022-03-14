import request from "../../config/request"
import { ActionTypes } from "../constants/action-types"


export const fetchProducts = () => async (dispatch: any) => {
  const response = await request.get("/products")

  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data })
}

export const fetchProduct = (id: number) => async (dispatch: any) => {
  const response = await request.get(`/products/${id}`)

  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data })
}

export const setProducts = (products: any) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products
  }
}

export const selectProducts = (product: any) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product
  }
}

export const removeSelectProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  }
}