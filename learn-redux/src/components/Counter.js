import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const add = () => {
    dispatch({ type: "ADD" });
  };
  const increase = () => {
    dispatch({ type: "INCREASE", amount: 5 });
  };
  const minus = () => {
    dispatch({ type: "MINUS" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
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
