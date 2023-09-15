import React from 'react';

const Register = () => {
  return (
    <>
        <div className="login_container">
        <div className="login">
          <form className='login_form'>
            <h1 className='login_title'>Register</h1>
            <input type="text" placeholder='username' /><br />
            <input type="password" placeholder='password' /><br />
            <button className='register_button'>Register</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
