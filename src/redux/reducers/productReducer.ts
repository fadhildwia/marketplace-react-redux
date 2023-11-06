import { ActionTypes } from "../constants/action-types";
import { ProductTypes } from "../constants/productTypes"

const initialState = {
  data: [],
  loading: false,
  error: null,
}
export interface DataState {
  data: any;
  loading: boolean;
  error: Error | null;
}

export const producerReducer = (state = initialState, action: any): DataState => {
  switch (action.type) {
    case ProductTypes.PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ProductTypes.PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case ProductTypes.PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
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