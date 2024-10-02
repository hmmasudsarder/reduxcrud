import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './features/task/tasksSlice';

 const store = configureStore({
  reducer: {
    tasksSlice: tasksSlice
  },
})


export default store;