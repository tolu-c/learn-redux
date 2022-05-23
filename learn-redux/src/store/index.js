// const redux = require("redux");
import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "ADD") {
    return {
      counter: (state.counter += 1),
    };
  }

  if (action.type === "INCREASE") {
    return {
      counter: (state.counter += action.amount),
    };
  }

  if (action.type === "MINUS") {
    return {
      counter: (state.counter -= 1),
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