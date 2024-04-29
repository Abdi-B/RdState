import React from 'react'

const login = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')

    const hadleLogin = () => {

    }
  return (
    <div>
      <form>
        <input type='text' value={email} placeholder='email' onChange={(e) => setemail(e.target.value)}/>
        <input type='password' placeholder='password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
        
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default login
