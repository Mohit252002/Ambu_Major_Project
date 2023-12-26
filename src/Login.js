import React from 'react'
import './login.css'
function Login() {
  return (
    <div className="login-container">
    <h2>Login</h2>
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />

      <button type="button">Login</button>
    </form>
  </div>
  )
}

export default Login
