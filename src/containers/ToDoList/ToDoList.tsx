import React from 'react';
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hook";
import { removeTask, selectTasks, toggleTaskStatus } from "../../store/toDoListSlice";
import AddTaskInput from "../../components/AddTaskInput/AddTaskInput";
import Task from "../../components/Task/Task";

const ToDoList = () => {
  const dispatch = useDispatch();
  const tasks = useAppSelector(selectTasks);

  const onStatusChangeHandler = (id: string) => {
    dispatch(toggleTaskStatus(id));
  };

  const onRemoveHandler = (id: string) => {
    dispatch(removeTask(id));
  };

  return (
      <div className="container">
        <h1>ToDoList App</h1>
        <AddTaskInput/>
        {tasks.map(task => (
          <Task
              task={task}
              key={task.id}
              onStatusChange={onStatusChangeHandler}
              onRemove={onRemoveHandler}
          />
        ))}
      </div>
  );
};

export default ToDoList;