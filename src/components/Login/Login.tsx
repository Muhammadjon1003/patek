import React, { useState } from 'react'
import './Login.scss'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  return (
        <div className="div">
          <div className="column">
            <img
              loading="lazy"
              srcSet="..."
              className="img"
            />
          </div>
          <div className="login-container">
      <div className="action-buttons">
        <span className="action-button">Login</span>
        <span className="action-button">Signup</span>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="password-input-container">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </span>
        </div>
      </div>
    </div>
      </div>
  )
}

export default Login
