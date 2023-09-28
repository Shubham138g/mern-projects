import React, { useState } from 'react';
import { Link, json } from 'react-router-dom';

const Signup = () => {
    const [credential, setcredential] = useState({
        name: '',
        email: '',
        password: '',
        geolocation: '',
    });


    const handelSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/api/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:credential.name,email:credential.email,password:credential.password,location:credential.geolocation,})
        });
        const json= await response.json();
        console.log(json);

        if(!json.success){
            alert("Enter Valid Data");
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
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={credential.name} onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credential.email} onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credential.password} onChange={onchange} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="adderess" className="form-label">Address</label>
                        <input type="text" className="form-control" name='geolocation' value={credential.geolocation} onChange={onchange} id="" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'> Already a user</Link>
                </form>
            </div>

        </>
    );
}

export default Signup;
