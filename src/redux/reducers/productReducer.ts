import { ActionTypes } from "../constants/action-types"
import { ProductTypes } from "../constants/productTypes"

const initialState = {
  products: []
}

export const producerReducer = (state: any = initialState, { type, payload }: any) => {
  switch(type) {
    case ProductTypes.PRODUCT_SUCCESS:
      return { ...state, products: payload }
    default:
      return state
  }
}

export const selectedProductReducer = (state={}, { type, payload }: any) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload }
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {}
    default:
      return state
  }
}