import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const regiterPage=()=>{
    navigate('/register')
  }
  return (
    <>
       <div className="login_container">
        <div className="login">
          <form className='login_form'>
            <h1 className='login_title'>Register Here</h1>
            <button className='home_button' onClick={regiterPage}>Register</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
