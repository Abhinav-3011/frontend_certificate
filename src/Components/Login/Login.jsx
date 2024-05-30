import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { login } from '../LoginCheck'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add_register_email } from '../LoginCheck';
import Swal from "sweetalert2"
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
    const dispatch=useDispatch()
    const navigate=useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTermsChange = () => {
    setTermsAgreed(!termsAgreed);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make POST request to your server
    try {
      const response = await axios.post('http://localhost:8000/login', {
        email,
        password,
        termsAgreed,
      });
      console.log(response.data);

      if(response.data)
        {

        
      dispatch(login())
      dispatch(add_register_email(email))
       navigate("/")
        }
        else
        {
          Swal.fire("Kindly Please Check Your Details");
        }
      // Handle success response
    } catch (error) {
      console.error('Error submitting login:', error); // Handle error
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <form onSubmit={handleSubmit}>
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
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={termsAgreed}
                    onChange={handleTermsChange}
                    id="termsCheckbox"
                  />
                  <label className="form-check-label" htmlFor="termsCheckbox">
                    I agree to the Terms and Conditions
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={!termsAgreed}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
