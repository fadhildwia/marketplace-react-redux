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

export const producerReducer = (state = initialState, { type, data, error }: any): DataState => {
  switch (type) {
    case ProductTypes.PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ProductTypes.PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: data,
      };
    case ProductTypes.PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: error,
      };
    default:
      return state;
  }
}

export const selectedProductReducer = (state={}, { type, payload }: any) => {
  switch (type) {
    case ProductTypes.SELECTED_PRODUCT:
      return { ...state, ...payload }
    case ProductTypes.REMOVE_SELECTED_PRODUCT:
      return {}
    default:
      return state
  }
}