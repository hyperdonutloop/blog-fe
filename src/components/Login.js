import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginRequest, registerRequest } from '../actions';
import { Redirect } from 'react-router-dom';

const Login = props => {
  const [ formData, setFormData ] = useState({ username: '', password: ''})

  const handleLogin = (e) => {
    console.log('LOGGIN IN!');
    e.preventDefault();
    props.loginRequest(formData)
  }

  const handleRegister = (e) => {
    console.log('REGISTERING');
    e.preventDefault();
    props.registerRequest(formData)
  }

  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <form className="login-form">
      <h2>This is a Login Page</h2>

      <input 
        name="username"
        type="text"
        placeholder="username here"
        onChange={handleForm}
      />
      <input 
        name="password"
        type="password"
        placeholder="password here"
        onChange={handleForm}
        autoComplete="on"
      />
      <div className="buttons">
        <button disabled={props.isAuthenticating} onClick={handleLogin}>Sign-In</button>
        <button disabled={props.isAuthenticating} onClick={handleRegister}>Register</button>
      </div>
      {props.token ? <Redirect to='/home' /> : null}
    </form>
  )

}

const mapStateToProps = state => {
  return {
    token: state.token,
    username: state.username,
    isAuthenticating: state.isAuthenticating
  };
}

export default connect(mapStateToProps, {loginRequest, registerRequest})(Login);