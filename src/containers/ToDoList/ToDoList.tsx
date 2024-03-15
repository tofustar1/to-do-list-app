import React, {useEffect, useState} from 'react';
import { useDispatch } from "react-redux";
import { Reorder } from 'framer-motion';
import { useAppSelector } from "../../app/hook";
import { addTasksFromStorage, removeTask, selectFilter, selectTasks, toggleTaskStatus } from "../../store/toDoListSlice";
import { ITask } from "../../types";
import AddTaskInput from "../../components/AddTaskInput/AddTaskInput";
import Task from "../../components/Task/Task";
import FilterBlock from "../../components/FilterBlock/FilterBlock";
import './ToDoList.css';

const ToDoList = () => {
  const dispatch = useDispatch();
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);

  let tasksForToDoList = tasks;
  if (filter === "Done") {
    tasksForToDoList = tasks.filter(task => task.isDone);
  } else if (filter === "Active") {
    tasksForToDoList = tasks.filter(task => !task.isDone);
  }

  const [dragAndDropTasks, setDragAndDropTasks] = useState(tasksForToDoList);

  useEffect(() => {
    setDragAndDropTasks(tasksForToDoList);
  }, [tasksForToDoList]);

  useEffect(() => {
    const storedTasksString = localStorage.getItem('tasks');
    const storedTasks: ITask[] = storedTasksString ? JSON.parse(storedTasksString) : [];
    if (!!storedTasks.length) {
      dispatch(addTasksFromStorage(storedTasks));
    }
  }, [dispatch]);

  const onStatusChangeHandler = (id: string) => {
    dispatch(toggleTaskStatus(id));
  };

  const onRemoveHandler = (id: string) => {
    dispatch(removeTask(id));
  };

  return (
      <div className="todolist">
        <h1>ToDoList App</h1>
        <AddTaskInput/>
        <Reorder.Group
            onReorder={setDragAndDropTasks}
            values={dragAndDropTasks}
            axis="y"
        >
        {dragAndDropTasks.map(task => (
            <Task
                task={task}
                key={task.id}
                onStatusChange={onStatusChangeHandler}
                onRemove={onRemoveHandler}
            />
        ))}
        </Reorder.Group>
        <FilterBlock />
      </div>
  );
};

export default ToDoList;