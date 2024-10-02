import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Masud Sarder",
    email: "masud@gamil.com",
    userTasks: []
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {

    }


})



export default userSlice.reducer;