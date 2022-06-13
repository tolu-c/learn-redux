// const redux = require("redux");
import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

createSlice({
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

const counterReducer = (state = initialState, action) => {
  if (action.type === "ADD") {
    return {
      counter: (state.counter += 1),
      showCounter: state.showCounter,
    };
  }

  if (action.type === "INCREASE") {
    return {
      counter: (state.counter += action.amount),
      showCounter: state.showCounter,
    };
  }

  if (action.type === "MINUS") {
    return {
      counter: (state.counter -= 1),
      showCounter: state.showCounter,
    };
  }

  if (action.type === "TOGGLE") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

// const counterSubscriber = () => {
//   const latestStoreState = store.getState();
//   console.log(latestStoreState);
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: "ADD" });
// store.dispatch({ type: "MINUS" });

export default store;
