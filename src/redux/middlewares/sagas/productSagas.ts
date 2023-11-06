import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects"
import { ProductTypes } from "../../constants/productTypes";
import api from "../../../helpers/api";

export interface FetchDataRequestAction {
  type: typeof ProductTypes.PRODUCT_REQUEST;
}

export interface FetchDataSuccessAction {
  type: typeof ProductTypes.PRODUCT_SUCCESS;
  data: any;
}

export interface FetchDataFailureAction {
  type: typeof ProductTypes.PRODUCT_FAILURE;
  error: Error;
}

export const fetchDataRequest = (): FetchDataRequestAction => ({
  type: ProductTypes.PRODUCT_REQUEST,
});

export const fetchDataSuccess = (data: any): FetchDataSuccessAction => ({
  type: ProductTypes.PRODUCT_SUCCESS,
  data,
});

export const fetchDataFailure = (error: Error): FetchDataFailureAction => ({
  type: ProductTypes.PRODUCT_FAILURE,
  error,
});

function* fetchData(action: FetchDataRequestAction): any {
  try {
    const response: any = yield call(api.getData); // Call your API function with the provided ID
    yield put(fetchDataSuccess(response.data)); // Dispatch a success action with the received data
  } catch (error: any) {
    yield put(fetchDataFailure(error)); // Dispatch a failure action if there's an error
  }
}

function* dataSaga() {
  yield takeLatest(ProductTypes.PRODUCT_REQUEST, fetchData);
}

export default dataSaga