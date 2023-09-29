import React from "react";
import { Link,useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("authtoken");
    navigate("/login")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            GoFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fs-5 " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {
                (localStorage.getItem("authtoken"))
                ?
                 <li className="nav-item">
                 <Link className="nav-link active fs-5 " aria-current="page" to="/">
                   My Order
                 </Link>
               </li>
               :""
              }
            </ul>
            {
              (!localStorage.getItem("authtoken"))
              ?
            <div className="d-flex">
              <Link className="btn bg-white text-black mx-1" to="/login">  Login</Link>
              <Link className="btn bg-white text-black mx-1" to="/createuser">  Signup </Link>
            </div>
            :
            <>
             <div className="btn bg-white text-black mx-2">
              My Cart
            </div>
            <div className="btn bg-white text-danger  mx-2" onClick={handleLogout}>
              logout
            </div>
            </>
           
}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
