import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    message: "",
  },
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    resetMessage: (state, action) => {
      state.message = "";
    },
  },
});

export default searchSlice.reducer;
export const { setMessage, resetMessage } = searchSlice.actions;
