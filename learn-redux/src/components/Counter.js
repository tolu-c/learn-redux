import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const add = () => {
    dispatch(counterActions.add());
  };

  const increase = () => {
    dispatch(counterActions.increase({ amount: 5 }));
  };
  
  const minus = () => {
    dispatch(counterActions.minus());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter} </div>
      {show && (
        <div>
          <button onClick={add}>Add</button>
          <button onClick={increase}>Add 5 more</button>
          <button onClick={minus}>MINUS</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
