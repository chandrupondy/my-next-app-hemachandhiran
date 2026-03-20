import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
}

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {

    // READ
    fetchUsersRequest(state) {
      state.loading = true;
    },
    fetchUsersSuccess(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
      state.loading = false;
    },
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },

    // CREATE
    addUserRequest(state, action: PayloadAction<User>) {
      state.loading = true;
    },

    // UPDATE
    updateUserRequest(state, action: PayloadAction<User>) {
      state.loading = true;
    },

    // DELETE
    deleteUserRequest(state, action: PayloadAction<number>) {
      state.loading = true;
    },
  },
});

export const {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUserRequest,
  updateUserRequest,
  deleteUserRequest,
} = userSlice.actions;

export default userSlice.reducer;