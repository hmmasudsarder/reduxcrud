import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    task: [],
  }

  const tasksSlice = createSlice({
    name: "tasksSlice",
    initialState,
    reducers: {

    }
  })

  export default tasksSlice.reducer;