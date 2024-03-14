import React, { useState } from 'react';
import './AddTaskInput.css';

interface Props {
  onAddTaskHandler: (text: string) => void ;
}
const AddTaskInput : React.FC<Props> = ({ onAddTaskHandler }) => {

  const [newTask, setNewTask] = useState<string>('');

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const onAddTask = () => {
    if (newTask.length >= 3) {
      onAddTaskHandler(newTask);
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