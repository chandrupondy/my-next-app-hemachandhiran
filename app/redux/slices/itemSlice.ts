import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: number;
  name: string;
}

interface ItemState {
  items: Item[];
}

const initialState: ItemState = {
  items: []
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {

    // ADD
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },

    // EDIT
    editItem: (state, action: PayloadAction<Item>) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );

      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },

    // DELETE
    deleteItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    }

  }
});

export const { addItem, editItem, deleteItem } = itemSlice.actions;

export default itemSlice.reducer;