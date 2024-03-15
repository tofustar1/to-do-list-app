import React from 'react';
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hook";
import { removeTask, selectFilter, selectTasks, toggleTaskStatus } from "../../store/toDoListSlice";
import AddTaskInput from "../../components/AddTaskInput/AddTaskInput";
import Task from "../../components/Task/Task";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import './ToDoList.css';

const ToDoList = () => {
  const dispatch = useDispatch();
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);

  const onStatusChangeHandler = (id: string) => {
    dispatch(toggleTaskStatus(id));
  };

  const onRemoveHandler = (id: string) => {
    dispatch(removeTask(id));
  };

  let tasksForToDoList = tasks;
  if (filter === "Done") {
    tasksForToDoList = tasks.filter(task => task.isDone);
  } else if (filter === "Active") {
    tasksForToDoList = tasks.filter(task => !task.isDone);
  }

  return (
      <div className="todolist">
        <h1>ToDoList App</h1>
        <AddTaskInput/>
        {tasksForToDoList.map(task => (
            <Task
                task={task}
                key={task.id}
                onStatusChange={onStatusChangeHandler}
                onRemove={onRemoveHandler}
            />
        ))}
        <FilterBlock />
      </div>
  );
};

export default ToDoList;