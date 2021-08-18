
import React, { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>The Count is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase the count by 1</button>
      <button onClick={() => setCount(count - 1)}>decrease the count by 1</button>
    </div>
  );
}

export default App;

