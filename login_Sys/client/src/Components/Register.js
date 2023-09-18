import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [user, setuser] = useState({
    username: '',
    password: '',
  });

  const registerEvent = (e) => {
    // console.log(e.target.name,":",e.target.value);
    setuser({ ...user, [e.target.name]: e.target.value });

  }
  // console.log(user);

  const formEvent = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/register', user);
      console.log(response.data.message);
      setuser({
        username: '',
        password: '',
      })
      alert("User Registered");
    } catch (error) {
      console.log(` ${error}`);
      // console.log('axios calling error',error.response.data.message);

    }
  }

  return (
    <>
      <div className="login_container">
        <div className="login">
          <form className='login_form' onSubmit={formEvent}>
            <h1 className='login_title'>Register</h1>
            <input type="text"
              name='username'
              placeholder='username'
              value={user.username}
              onChange={registerEvent}
            /><br />

            <input type="password"
              name='password'
              placeholder='password'
              value={user.password}
              onChange={registerEvent}
            /><br />
            <button className='register_button'>Register</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
