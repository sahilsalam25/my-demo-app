// Counter.tsx
import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(0);


  const bgColor = `rgba(0, 0, 255, ${count / 100})`;
  return (
    <div style={{ backgroundColor: bgColor, minHeight: '100vh', padding: '20px' }}>
      <h1>Counter</h1>
      <div>
        <Button variant="contained" color="primary" onClick={decrement}>Decrement</Button>
        <span style={{ margin: '0 10px' }}>{count}</span>
        <Button variant="contained" color="primary" onClick={increment}>Increment</Button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Button variant="contained" color="secondary" onClick={reset}>Reset</Button>
      </div>
    </div>
  );
};

export default Counter;
