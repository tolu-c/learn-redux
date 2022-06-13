// const redux = require("redux");
import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add(state) {
      state.counter += 1;
    },

    increase(state, action) {
      state.counter += action.amount;
    },

    minus(state) {
      state.counter -= 1;
    },

    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = createStore(counterSlice.reducer);

export default store;
