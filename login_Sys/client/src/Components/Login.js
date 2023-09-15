import React from 'react';

const Login = () => {
  return (
    <>
      <div className="login_container">
        <div className="login">
          <form className='login_form'>
            <h1 className='login_title'>Login</h1>
            <input type="text" placeholder='username' /><br />
            <input type="password" placeholder='password' /><br />
            <button className='login_button'>Login</button>
          </form>
        </div>
      </div>

    </>
  );
}

export default Login;
