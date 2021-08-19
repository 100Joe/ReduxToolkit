import { configureStore } from "@reduxjs/toolkit";
// import slice from reducer file
import counterReducer from "./counter";

export default configureStore({
  reducer: {
    //name eqaul to reducer and seperated by comma. This is available to all components in the app. 
    counter: counterReducer
  }
});