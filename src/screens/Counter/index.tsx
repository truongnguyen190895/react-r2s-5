import React from "react";
import { useSelector, useDispatch } from "react-redux";

const CounterPage = () => {
  const state = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch({
      type: "INCREASE",
    });
  };

  const handleDecrease = () => {
    dispatch({
      type: "DECREASE",
    });
  };

  const handleIncreaseByFive = () => {
    dispatch({
      type: "INCREASE_BY_AMOUNT",
      payload: 5,
    });
  };

  return (
    <div>
      <h1>{state.counter}</h1>
      <section>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleIncreaseByFive}>+ by 5</button>
      </section>
    </div>
  );
};

export default CounterPage;
