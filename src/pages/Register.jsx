import React from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

const Register = () => {
  const navigate=
  useNavigate();
  const handleRegister = (e) =>{
    e.preventDefault();
    navigate('/menu');
      alert("You have been successfully registered");
    
    }
  return (
    <div>
    <form onSubmit={handleRegister}>
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Your name:</label>
    <input type="name" class="form-control" id="exampleInputname1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPhno" class="form-label">Phone number</label>
    <input type="phno1" class="form-control" id="exampleInputPhno1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputname" class="form-label">Address</label>
    <input type="name" class="form-control" id="exampleInputname"/>
    <div className="mb-3">
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="register" class="btn btn-primary" onClick={handleRegister}>Register Now </button>
</form>  
    </div>
  );
}

export default Register
