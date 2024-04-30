import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../ReduxToolkit/authSlice';

const Home = () => {
    const dispatch = useDispatch();
    const logoutHandler = () =>{
        dispatch(authActions.logout())
    }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={logoutHandler}>Logout</button>


    </div>
  )
}

export default Home
