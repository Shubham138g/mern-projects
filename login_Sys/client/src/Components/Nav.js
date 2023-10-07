import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div className="container">
                <div className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        {/* <li><Link to="/logout">Logout</Link></li> */}
                    </ul>
                </div>
            </div>


        </>
    );
}

export default Nav;
