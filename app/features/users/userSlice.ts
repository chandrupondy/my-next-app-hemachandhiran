import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type User = {
  id: number;
  name: string;
  email: string;
};

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

export const fetchUsers = createAsyncThunk<User[]>(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch users");
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;