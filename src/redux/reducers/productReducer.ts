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

export const productListReducer = (state = initialState, { type, data, error }: any): DataState => {
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

export const productDetailsReducer = (state = initialState, { type, data, error }: any): DataState => {
  switch (type) {
    case ProductTypes.DETAIL_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ProductTypes.DETAIL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: data,
      };
    case ProductTypes.DETAIL_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: error,
      };
    default:
      return state;
  }
}