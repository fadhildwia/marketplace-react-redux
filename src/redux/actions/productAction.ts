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

export const selectProducts = (product: any) => {
  return {
    type: ProductTypes.SELECTED_PRODUCT,
    payload: product
  }
}

export const removeSelectProducts = () => {
  return {
    type: ProductTypes.REMOVE_SELECTED_PRODUCT,
  }
}