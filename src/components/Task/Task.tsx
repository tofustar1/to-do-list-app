import React from 'react';
import { Reorder } from "framer-motion";
import { ITask } from "../../types";
import './Task.css';

interface Props {
  onRemove: (id: string) => void;
  onStatusChange: (id: string) => void;
  task: ITask
}
const Task : React.FC<Props> = ({task, onStatusChange, onRemove}) => {
  return (
      <Reorder.Item
          value={task}
          className="task"
          key={task.id}
      >
        <span>{task.text}</span>
        <div className="controls">
          <input
              type="checkbox"
              checked={task.isDone}
              onChange={() => onStatusChange(task.id)}
          />
          <button
              className="remove-btn"
              onClick={() => onRemove(task.id)}
          >
            X
          </button>
        </div>
      </Reorder.Item>
  );
};

export default Task;