
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { increment, decrement, incrementByAmount, decrementByAmount } from './redux/counter';


function App() {
  // const count = useSelector(state => state.counter.count);
  const { count } = useSelector(state => state.counter);

  // use the dispatch hook to call the action which triggers the state to be manipulated. 
  // This hook be used to pull any actions out of any of the reducers in the app. 
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The Count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increase the count by 1</button>
      <button onClick={() => dispatch(decrement())}>decrease the count by 1</button>
      <button onClick={() => dispatch(incrementByAmount(14))}>increase the count by 14</button>
      <button onClick={() => dispatch(decrementByAmount(20))}>decrease the count by 20</button>
    </div>
  );
}

export default App;

