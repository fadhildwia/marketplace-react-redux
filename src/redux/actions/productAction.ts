import { ProductTypes } from "../constants/productTypes"

export const getProductRequest = () => ({
  type: ProductTypes.PRODUCT_REQUEST,
});

export const getProductSuccess = (data: any) => ({
  type: ProductTypes.PRODUCT_SUCCESS,
  data,
});

export const getProductFailure = (error: Error) => ({
  type: ProductTypes.PRODUCT_FAILURE,
  error,
});

export const getDetailProductRequest = (id: any) => ({
  type: ProductTypes.DETAIL_PRODUCT_REQUEST,
  payload: id
});

export const getDetailProductSuccess = (data: any) => ({
  type: ProductTypes.DETAIL_PRODUCT_SUCCESS,
  data,
});

export const getDetailProductFailure = (error: Error) => ({
  type: ProductTypes.DETAIL_PRODUCT_FAILURE,
  error,
});

export const removeSelectProducts = () => {
  return {
    type: ProductTypes.REMOVE_SELECTED_PRODUCT,
  }
}