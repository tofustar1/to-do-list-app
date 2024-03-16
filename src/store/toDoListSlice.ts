import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { RootState } from "../app/store";
import { ITask, TFilterValuesType } from "../types";

interface ToDoListSlice {
  tasks: ITask[];
  filter : TFilterValuesType;
}

const initialState: ToDoListSlice = {
  tasks: [
    {id: nanoid(), text: 'Do homework', isDone: true, order: 0},
    {id: nanoid(), text: 'By milk', isDone: false, order: 1},
    {id: nanoid(), text: 'Play Sony Playstation', isDone: false, order: 2},
  ],
  filter: 'All',
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
        order: state.tasks.length
      };
      state.tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
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
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    setFilter(state, action: PayloadAction<TFilterValuesType>) {
      state.filter = action.payload;
    },
    addTasksFromStorage: (state, action: PayloadAction<ITask[]>) => {
      state.tasks = action.payload;
    },
    updateTasksOrder: (state, action: PayloadAction<ITask[]>) => {
      state.tasks = action.payload;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
});

export const selectTasks = (state: RootState) => state.toDoList.tasks;
export const selectFilter = (state: RootState) => state.toDoList.filter;
export const { addTask, removeTask, toggleTaskStatus, setFilter, addTasksFromStorage, updateTasksOrder } = toDoListSlice.actions;
export const toDoListReducer = toDoListSlice.reducer;