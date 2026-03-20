import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "@/features/users/userSlice";

function fetchUsersApi() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json());
}

function* fetchUsers() {
  try {
    console.log("Saga triggered 🚀");

    const users = yield call(fetchUsersApi);

    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

export default function* userSaga() {
  yield takeLatest(fetchUsersRequest.type, fetchUsers);
}