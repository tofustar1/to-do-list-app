import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../../store/toDoListSlice";
import './AddTaskInput.css';

const AddTaskInput = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState<string>('');

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const onAddTask = () => {
    if (newTask.length >= 3) {
      dispatch(addTask(newTask));
      setNewTask('');
    }
  };

  return (
      <div className="input-block">
        <input
            type="text"
            value={newTask}
            onChange={onInputChangeHandler}
            className="input"
        />
        <button
            disabled={newTask.length < 3}
            onClick={onAddTask}
            className="add-btn"
        >
          Add
        </button>
      </div>
  );
};

export default AddTaskInput;