// import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/SearchSlice";
// import { configureStore } from "@vitejs/plugin-react";
// import { createStore } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
export default configureStore({
  reducer: {
    searchReducer,
  },
});
