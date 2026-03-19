import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/features/counter/counterSlice";
import itemReducer from "@/features/items/itemSlice";
import userReducer from "@/features/users/userSlice"; 

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    items: itemReducer, 
    users: userReducer,
  },
});

// Types (no change needed)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;