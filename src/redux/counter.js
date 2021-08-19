import { createSlice } from "@reduxjs/toolkit";

// Creating the state
// const initialState = {
// value: 0,
// }

// The Slice is comprised with your initialState, reducers, and actions. (Toolkit only)
// Actions are Increment, Decrement, and IncrementByAmount. These are Verbs that do things to the state.
// Reducers state.value +=1, state.value -= 1, state.value += action.payload. These manipulate the state. 
// Action.payload allows you to utilize action as a parameter to allow specificity. 
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  // reducers contains everything that touches the state meaning reducers and actions. 
  reducers: {
    increment:  //action (thing to do)
      (state) => {  //reducer(manipulates state)
        state.count += 1;
      },
    decrement:  //action (thing to do)
      (state) => { //reducer (manipulates state)
        state.count -= 1;
      },
    incrementByAmount: //action (thing to do)
      (state, action) => { //reducer (manipulates state)
        state.count += action.payload;
      },
    decrementByAmount: //action (thing to do)
      (state, action) => { //reducer (manipulates state)
        state.count -= action.payload;
      },
  },
})

// Destructuring of the reducers to call them in the entire react app
export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions

export default counterSlice.reducer
