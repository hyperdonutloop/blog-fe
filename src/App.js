import React, { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './utils/privateRoute.js';
import Login from './components/Login.js';
import AllPosts from './components/AllPosts.js';

import  { setToken, logout } from './actions';

import './App.css';


const App = props => {
  const { setToken } = props
  useEffect(() => {
    localStorage.getItem('token') ? setToken(true) : setToken(false)

  }, [setToken])

  return (
    <div className="App">
      <div className="nav-bar">
        <Link className="home-link"to="/home">Home</Link>
        <Link className="logoutlogin" to="/" onClick={props.token ? props.logout : null}>
          {props.token ? 'Log Out' : 'Log In'}
        </Link>

        <Route exact path='/' component={Login} />
        <PrivateRoute path='/blogs' component={AllPosts} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    token: state.token
  }
}
export default connect(mapStateToProps,{setToken, logout})(App);