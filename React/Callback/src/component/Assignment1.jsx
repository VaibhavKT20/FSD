import React, { useState, memo, useCallback } from "react";

function Assignment1() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((count) => count + 1);
  }, [count]);

  const handleDecrement = useCallback(() => {
    setCount((count) => count - 1);
  }, [count]);

  const CounterButton = memo(({ onIncrement, onDecrement }) => {
    console.log("CounterButton rendered");
    return (
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
    );
  });

  return (
    <div>
      <p>Count:{count}</p>
      <CounterButton
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

export default Assignment1;
