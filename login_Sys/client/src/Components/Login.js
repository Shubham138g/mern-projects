import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const [user, setuser] = useState({
    username: '',
    password: '',
  });
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const loginChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value })
    // console.log(e.target.value);
  };

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/login', user);
      console.log(response.data.message);
      setToken(response.data.token);
      console.log(setToken(response.data.token));

      if (response.status === 200) {
        alert("Login Successfull");
      }


      // if(token){
      //   navigate('/');
      // }
      // else{
      //   navigate('/register');
      // }
      setuser({
        username: '',
        password: '',
      })

    } catch (error) {
      console.log('error while calling loging axios', error);

      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;

        if (errorMessage === 'user not found') {
          alert('User not found. Please check your username.');
        } else if (errorMessage === 'invalid password') {
          alert('Invalid password. Please check your password.');
        } else {
          alert('An error occurred. Please try again later.');
        }
      } else {
        // Handle other errors (e.g., network errors)
        alert('An error occurred. Please try again later.');
      }
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
        </div><br />
        {/* {token && <p>Token: {token}</p>} */}
      </div>

    </>
  );
}

export default Login;
