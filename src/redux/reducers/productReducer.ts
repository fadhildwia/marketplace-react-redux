import { ActionTypes } from "../constants/action-types"

const initialState = {
  products: [{
    id: 1,
    title: 'Fadhil',
    category: 'Programmer'
  }]
}

export const producerReducer = (state: any = initialState, { type, payload }: any) => {
  switch(type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload }
    case ActionTypes.FETCH_PRODUCTS:
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