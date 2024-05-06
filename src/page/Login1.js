import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { authActions } from '../ReduxToolkit/authSlice';

const Login = () => {

  const dispatch = useDispatch();

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const handleLogin = (e) => {
       e.preventDefault();
      // console.log(email, password)
      
      dispatch(authActions.login());
      

    }
  return (
    <div>
      <form style={{display: 'flex', flexDirection: 'column', height: '100vh', width: '100%',justifyContent: 'center', alignItems: 'center' }}>
        <input type='text' value={email} placeholder='email' onChange={(e) => setemail(e.target.value)}/>
        <input type='password' placeholder='password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
        
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default Login
