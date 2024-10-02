import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  tasks: [],
  userSpecificTasks: [],
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
     state.tasks = state.tasks.filter(item => item.id !== payload);
    },
    // updateStatus: (state, {payload}) => {
    //  const target = state.tasks = state.tasks.find(item => item.id === payload.id)
    //  target.status = payload.status
    // }
    updateStatus: (state, action) => {
      const { id, status } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === id);

      if (taskIndex !== -1 && state.tasks[taskIndex]) {
        state.tasks[taskIndex].status = status;
      }
    },
    setUserTask: (state, {payload}) => {
        state.userSpecificTasks = state.tasks.filter(item => item.assignedTo === payload)
    }
  },
  },
);
export const { addTask, removeTask, updateStatus, setUserTask } = tasksSlice.actions;
export default tasksSlice.reducer;