import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup">
        <h2>Sign Up</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" />
          </div>
          <div className="form-group">
            <label htmlFor="occupation">Occupation:</label>
            <input type="text" id="occupation" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone No:</label>
            <input type="tel" id="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
