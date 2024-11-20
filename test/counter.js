import React, { useState } from 'react';

const Display = ({ value }) => {
  return <div data-testid="display-value">{value}</div>;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h1 data-testid="count-value">{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <Display value={count} />
    </div>
  );
};

export default Counter;
