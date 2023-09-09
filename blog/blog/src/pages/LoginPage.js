import React,{useState} from 'react';
import {Navigate} from 'react-router-dom';

const LoginPage = () => {
  
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [redirect, setredirect] = useState(false);

  const login=async(e)=>{
    e.preventDefault();
    const response= await fetch('http://localhost:4000/login',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers:{'Content-Type':'application/json'},
      credentials:'include',
    });
    if(response.ok){
      setredirect(true);
    }else
    {
      alert("wrong credentials");
    }
  }

  if(redirect){
    return  <Navigate to={'/'}/>
  }
  return (
    <>
      <form className='login' onSubmit={login}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder='username'
          value={username}
          onChange={e => setusername(e.target.value)} />
        <input
          type="password"
          placeholder='password'
          value={password}
          onChange={e => setpassword(e.target.value)} />

        <button>Login</button>
      </form>
    </>
  );
}

export default LoginPage;
