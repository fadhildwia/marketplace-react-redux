import api from "../../../helpers/api";
import { getDetailProductFailure, getDetailProductRequest, getDetailProductSuccess } from "../../actions/productAction";

export const getDetailProduct = (id: string | number) => {
  return (dispatch: any) => {
    dispatch(getDetailProductRequest(id));
    api.getDataById(id)
      .then((response: any) => {
        dispatch(getDetailProductSuccess(response.data));
      })
      .catch((error: any) => {
        dispatch(getDetailProductFailure(error.message));
      });
  };
}