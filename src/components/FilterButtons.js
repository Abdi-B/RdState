// FilterButtons.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodos, markAllCompleted } from '../Redux/actions';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  return (
    <div className="">
      <select
        className=""
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>

      <button
        className=""
        onClick={() => dispatch(markAllCompleted())}
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButtons;
