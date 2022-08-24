import { SignUpapi } from '../Common/api/Auth.api';
import { call, put, takeEvery, all } from 'redux-saga/effects'
import * as ActionType from '../Redux/ActionType';

function* Signup(action) {

   try {
      const user = yield call(SignUpapi, action.payload);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    console.log(user);
   } catch (e) {
  
   }
}

function* watchSignUp() {
  yield takeEvery(ActionType.SIGN_UP, Signup);
}
export function* signUpSaga() {
    yield all([

        watchSignUp()

    ])
}