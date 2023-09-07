import React from 'react';
import Nav from '../nav/Nav';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../home/home.css';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className=' home bg-dark w-100 vh-100'>
            <Nav />
            <div className='icons-container'>
                <ul className='icons'>
                    <li><a href="#"><i className=' bi bi-github text-secondary' style={{ fontSize: "25px" }}></i></a></li>
                    <li><a href="#"><i className=' bi bi-envelope text-secondary' style={{ fontSize: "25px" }}></i></a></li>
                    <li><a href="#"><i className=' bi bi-facebook text-secondary' style={{ fontSize: "25px" }}></i></a></li>
                </ul>

            </div>
            <div className='email-container'>
                <p>your_email@gmail.com</p>
            </div>
            <main>
                <p className='hi_name'>Hi,my name is</p>
                <h1 className='text-light'>Shubham.</h1>
                <h2>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 180,
                            strings: ["I am a full stack developer .", "I build things for the web"]
                        }} />
                </h2>
                <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cupiditate doloribus cum dolorum incidunt rem dignissimos. <br />
                    At animi, ad vel inventore, possimus aliquam exercitationem accusantium,<br /> vitae qui placeat sunt asperiores!
                </p>
                <button className=' bg-transparent'>Check out more</button>
            </main>
        </div>
    );
}

export default Home;
