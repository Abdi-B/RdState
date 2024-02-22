
import './App.css';
import Counter from './features/counter/Counter';
import AddPostForm from './features/posts/AddPostForm';
import PostList from './features/posts/PostList';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <AddPostForm />
      <PostList />
    </div>
  );
}
export default App;