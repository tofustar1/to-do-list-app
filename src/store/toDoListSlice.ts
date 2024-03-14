import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { RootState } from "../app/store";
import { ITask } from "../types";

interface ToDoListSlice {
  tasks: ITask[],
}

const initialState: ToDoListSlice = {
  tasks: [
    {id: nanoid(), text: 'Do homework', isDone: true},
    {id: nanoid(), text: 'By milk', isDone: false},
    {id: nanoid(), text: 'Play Sony Playstation', isDone: false},
  ],
};

const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addTask : (state, action: PayloadAction<string>) => {
      const newTask : ITask = {
        id: nanoid(),
        text: action.payload,
        isDone: false,
      };
      state.tasks.push(newTask);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTaskStatus: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      state.tasks = state.tasks.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            isDone: !task.isDone
          }
        }
        return task;
      });
    },
  },
});

export const selectTasks = (state: RootState) => state.toDoList.tasks;
export const {addTask, removeTask, toggleTaskStatus} = toDoListSlice.actions;
export const toDoListReducer = toDoListSlice.reducer;