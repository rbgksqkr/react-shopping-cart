import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, ...product } = action.payload.product;
      if (state[id]) {
        state[id].amount += 1;
      } else {
        state[id] = {
          ...product,
          id,
          amount: 1,
          addedDate: Date.now(),
          checked: true,
        };
      }
    },

    removeFromCart: (state, action) => {
      const { id } = action.payload;
      delete state[id];
    },

    changeAmount: (state, action) => {
      const { id, amount } = action.payload;
      state[id].amount = amount;
    },

    toggleChecked: (state, action) => {
      const { id } = action.payload;
      state[id].checked = !state[id].checked;
    },

    toggleAllChecked: (state, action) => {
      const { checked } = action.payload;
      Object.keys(state).forEach((id) => {
        state[id].checked = checked;
      });
    },

    removeChecked: (state) => {
      Object.entries(state).forEach(([id, item]) => {
        if (item.checked) {
          delete state[id];
        }
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  changeAmount,
  toggleChecked,
  toggleAllChecked,
  removeChecked,
} = cartSlice.actions;

export default cartSlice.reducer;