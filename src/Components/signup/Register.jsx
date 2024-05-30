import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { add_register_email } from '../LoginCheck';
import { set_all_array_data } from '../LoginCheck'
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 
  
  const navigator=useNavigate()
const dispatch=useDispatch()
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password matches confirm password

    
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    else
    {

    // Make POST request to your server
    try {
    
      const response = await axios.post('http://localhost:8000/register', {
        name:name,
        email:email,
        password:password
      });
      console.log(response.data); // Handle success response
      // Optionally redirect to login page after successful registration
      // history.push('/login');
       dispatch(add_register_email(email))
      
      if(response.data)
        {
          
          
Swal.fire({
  position: "top",
  icon: "success",
  title: "Data Register SuccesFull saved",
  showConfirmButton: false,
  timer: 1000
});

navigator("/")
        } 

else
{
  Swal.fire("Data can't save");
}

    } catch (error) {
      console.error('Error submitting registration:', error); // Handle error
    }
  }
  };
  

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Register</h2>
              <form onSubmit={handleSubmit} method='post'>
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
