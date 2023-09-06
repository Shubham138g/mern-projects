import React from 'react';
import 'bootstrap/js/dist/collapse';
const Nav = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-md navbar-dark bg-transparent">
                <a className="navbar-brand" href="/">Shubham</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#about"><span>01. </span>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience"><span>02. </span>Service</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#projects"><span>03. </span>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact"><span>04. </span>Contact</a>
                        </li>
                        <li className="nav-item">
                        <button className='bg-transparent'>Resume</button>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default Nav;
