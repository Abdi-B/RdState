
import { useSelector } from 'react-redux';
import './App.css';
import Todo from './components/Todo';
import Counter from './features/counter/Counter';
import AddPostForm from './features/posts/AddPostForm';
import PostList from './features/posts/PostList';
import Login from './page/Login1';
import Home from './page/Home';


function App() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  console.log(isLoggedIn)

  return (
    <div className="App">

            {/* REDUX EXAMPLE */}

      {/* <Counter /> */}
      {/* <AddPostForm />
      <PostList /> */}

      {/* <Todo /> */}

      {/* REDUX TOOLKIT EXAMPLE */}

     { !isLoggedIn && <Login />}
     { isLoggedIn && <Home />}
    </div>
  );
};

export default App;

