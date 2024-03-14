import {createSlice} from "@reduxjs/toolkit";

interface ToDoListSlice {

}

const initialState: ToDoListSlice = {

}

const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
});


export const toDoListReducer = toDoListSlice.reducer;