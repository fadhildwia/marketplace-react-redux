import { ActionTypes } from "../constants/action-types"

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