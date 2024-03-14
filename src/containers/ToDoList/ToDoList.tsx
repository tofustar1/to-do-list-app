import React, { useState } from 'react';
import { nanoid } from "nanoid";
import { ITask } from "../../types";
import AddTaskInput from "../../components/AddTaskInput/AddTaskInput";
import Task from "../../components/Task/Task";

const ToDoList = () => {

  const [tasks, setTasks] = useState<ITask[]>([
    {id: nanoid(), text: 'Do homework', isDone: true},
    {id: nanoid(), text: 'By milk', isDone: false},
    {id: nanoid(), text: 'Play Sony Playstation', isDone: false},
  ]);

  const onStatusChangeHandler = (id: string) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isDone: !task.isDone
        }
      }
      return task;
    }));
  };

  const onRemoveHandler = (id: string) => {
    setTasks(prevState => prevState.filter(task => task.id !== id));
  };

  const onAddTaskHandler = (text: string) => {
      const task : ITask = {
        id: nanoid(),
        text,
        isDone: false,
      };

      setTasks(prevState => [...prevState, task]);
    };

  return (
      <div className="container">
        <h1>ToDoList App</h1>
        <AddTaskInput
            onAddTaskHandler={onAddTaskHandler}
        />
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