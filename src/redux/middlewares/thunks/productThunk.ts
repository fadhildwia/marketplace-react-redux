import axios from "axios";
import { ProductTypes } from "../../constants/productTypes";

const fetchDataRequest = () => {
  return {
    type: ProductTypes.PRODUCT_REQUEST,
  };
};

const fetchDataSuccess = (data: any) => {
  return {
    type: ProductTypes.PRODUCT_SUCCESS,
    payload: data,
  };
};

const fetchDataFailure = (error: any) => {
  return {
    type: ProductTypes.PRODUCT_FAILURE,
    payload: error,
  };
};

export const fetchProduct = () => {
  return (dispatch: any) => {
    dispatch(fetchDataRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchDataFailure(errorMessage));
      });
  };
}