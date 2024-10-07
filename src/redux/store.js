import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './features/task/tasksSlice';
import userSlice from './features/user/userSlice';
import baseApi from './features/api/baseApi';

const store = configureStore({
  reducer: {
    tasksSlice: tasksSlice,
    userSlice: userSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})


export default store;