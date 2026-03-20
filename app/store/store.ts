import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import counterReducer from "@/features/counter/counterSlice";
import itemReducer from "@/features/items/itemSlice";
import userReducer from "@/features/users/userSlice";

import rootSaga from "@/sagas"; 

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    items: itemReducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});


sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;