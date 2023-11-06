import { call, put, takeLatest } from "redux-saga/effects"
import { ProductTypes } from "../../constants/productTypes";
import api from "../../../helpers/api";
import { getProductFailure, getProductSuccess } from "../../actions/productAction";

function* fetchData(): any {
  try {
    const response: any = yield call(api.getData); // Call your API function with the provided ID
    yield put(getProductSuccess(response.data)); // Dispatch a success action with the received data
  } catch (error: any) {
    yield put(getProductFailure(error)); // Dispatch a failure action if there's an error
  }
}

function* dataSaga() {
  yield takeLatest(ProductTypes.PRODUCT_REQUEST, fetchData);
}

export default dataSaga