import React, { useState } from 'react';
import { Link, json } from 'react-router-dom';

const Login = () => {
    const [credential, setcredential] = useState({    
        email: '',
        password: '',
    });


    const handelSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/api/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:credential.email,password:credential.password})
        });
        const json= await response.json();
        console.log(json);

        if(!json.success){
            alert("enter valid data");
        }
    }

    const onchange = (event) => {
        setcredential({ ...credential, [event.target.name]: event.target.value });
        // console.log({ ...credential, [event.target.name]: event.target.value });
    }
    return (

        <>
            <div className="container">
                <form onSubmit={handelSubmit}>
                  
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credential.email} onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credential.password} onChange={onchange} id="exampleInputPassword1" />
                    </div>
                  

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/createuser" className='m-3 btn btn-danger'> I'm a new user</Link>
                </form>
            </div>

        </>
    );
}

export default Login;
