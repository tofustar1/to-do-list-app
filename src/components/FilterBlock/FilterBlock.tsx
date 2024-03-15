import React from 'react';
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/toDoListSlice";
import './FilterBlock.css';

const FilterBlock  = () => {
  const dispatch = useDispatch();

  const onAllClickHandler = () => dispatch(setFilter('All'));
  const onActiveClickHandler = () => dispatch(setFilter('Active'));
  const onDoneClickHandler = () => dispatch(setFilter('Done'));

  return (
      <div className="group-btn">
        <button className="filter-btn btn-all" onClick={onAllClickHandler}>All</button>
        <button className="filter-btn btn-active"  onClick={onActiveClickHandler}>Active</button>
        <button className="filter-btn btn-done" onClick={onDoneClickHandler}>Done</button>
      </div>
  );
};

export default FilterBlock;