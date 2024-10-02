import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  tasks: [],
}

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload })
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({ id: lastElement.id + 1, status: "pending", ...payload })
      }
    },
    removeTask: (state, { payload }) => {
      state.tasks.filter(item => item.id !== payload);
    },
    updateStatus: (state, action) => {
      const { id, status } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === id);

      if (taskIndex !== -1 && state.tasks[taskIndex]) {
        state.tasks[taskIndex].status = status;
      }
    },
  },
  },
);
export const { addTask, removeTask, updateStatus } = tasksSlice.actions;
export default tasksSlice.reducer;