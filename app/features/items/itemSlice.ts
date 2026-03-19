import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: number;
  name: string;
}

interface ItemState {
  list: Item[];
}

const initialState: ItemState = {
  list: [],
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.list.push(action.payload);
    },

    editItem: (state, action: PayloadAction<Item>) => {
      const index = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },

    deleteItem: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addItem, editItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;