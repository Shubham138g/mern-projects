import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

  const [user, setuser] = useState({
    username: '',
    password: '',
  });
  const loginChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value })
    // console.log(e.target.value);
  };

  const loginSubmit = async(e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:4000/login', user);
      console.log(response.data.message);
      
      setuser({
        username: '',
        password: '',
      })
      
    } catch (error) {
      console.log('error while calling loging axios',error);
    }
  }

  return (
    <>
      <div className="login_container">
        <div className="login">
          <form className='login_form' onSubmit={loginSubmit}>
            <h1 className='login_title'>Login</h1>
            <input type="text"
              placeholder='username'
              value={user.username}
              name='username'
              onChange={loginChange}
            /><br />
            <input type="password"
              placeholder='password'
              value={user.password}
              name='password'
              onChange={loginChange}
            /><br />
            <button className='login_button'>Login</button>
          </form>
        </div>
      </div>

    </>
  );
}

export default Login;
