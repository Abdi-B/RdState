// Todo.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FilterButtons from './FilterButtons';
import TodoList from './TodoList';
// import { BsSearch, BsPlus } from 'react-icons/bs';
import { addTodo, updateSearchTerm } from '../Redux/actions';

import { ADD_TODO } from './../Redux/actionTypes';


const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== '') {
      // handleAddTodo(newTodoText.trim());
      dispatch(addTodo(newTodoText.trim()));
      
      // dispatch(
      //   type: ADD_TODO,
      //   payload: {newTodoText.trim()}
      // )

      setNewTodoText('');
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="">
      <h2 className=''>Personal TODO APP</h2>
      <div className="">
        <input
          id="addTodoInput"
          className=""
          type="text"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          className=""
          onClick={handleAddTodoClick}
        >
          Add Text
        </button>
      </div>

      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <FilterButtons />
        <div className="">
          <input
            className=""
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="">
            search Button
          </button>
        </div>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;