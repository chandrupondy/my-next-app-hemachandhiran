import { call, put, takeLatest } from "redux-saga/effects";

import {
  fetchUsersApi,
  addUserApi,
  updateUserApi,
  deleteUserApi,
} from "./userApi";

import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUserRequest,
  updateUserRequest,
  deleteUserRequest,
} from "./userSlice";

function* fetchUsers(): any {
  try {
    const data = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(data));
  } catch (err: any) {
    yield put(fetchUsersFailure(err.message));
  }
}

function* addUser(action: any): any {
  yield call(addUserApi, action.payload);
  yield put(fetchUsersRequest());
}

function* updateUser(action: any): any {
  yield call(updateUserApi, action.payload);
  yield put(fetchUsersRequest());
}

function* deleteUser(action: any): any {
  yield call(deleteUserApi, action.payload);
  yield put(fetchUsersRequest());
}

export function* userSaga() {
  yield takeLatest(fetchUsersRequest.type, fetchUsers);
  yield takeLatest(addUserRequest.type, addUser);
  yield takeLatest(updateUserRequest.type, updateUser);
  yield takeLatest(deleteUserRequest.type, deleteUser);
}