import { useDispatch } from 'react-redux';
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from '../Redux/actions';


const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
      <div >
        <span >
          {index + 1}.
        </span>
        <span className={`mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.text}
        </span>
      </div>
      <div className=''>
        <button
          className=""
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? "completed" : "Incomplete" }
        </button>
        <button
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))}
        >
          Remove
        </button>
        {!todo.completed && (
          <button
            className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markCompleted(index))}
          >
            Completed
          </button>
        )}
        {todo.completed && (
          <button
            className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markIncomplete(index))}
          >
            Incomplete
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
