import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],

  reducers: {
    addItem(state, action) {
      return [...state, action.payload]
    },
    deleteItem(state, action) {
      return state.filter(item => item.id !== action.payload);
      // const itemId = state.findIndex(item => item.id === action.payload);
      // state.splice(itemId, 1);
    },
  },
});

export const { addItem, deleteItem } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
