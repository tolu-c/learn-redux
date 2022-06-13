import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    add(state) {
      state.counter += 1;
    },

    increase(state, action) {
      state.counter += action.payload.amount;
    },

    minus(state) {
      state.counter -= 1;
    },

    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
