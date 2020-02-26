import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

// token handlers
export const SET_TOKEN = 'SET_TOKEN'

export const setToken = value => ({
  type: SET_TOKEN,
  payload: value
});

// login actions
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const registerRequest = userData => dispatch => {
  dispatch({ type: REGISTER_REQUEST, payload: userData });
  axios.post('https://blog-be.herokuapp.com/api/auth/register', userData)
    .then(res => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: REGISTER_FAILURE, payload: error}))
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = userData => dispatch => {
  dispatch({ type: LOGIN_REQUEST, payload: userData });
    axios.post('https://blog-be.herokuapp.com/api/auth/login', userData)
      .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
      .catch(error => dispatch({ type: LOGIN_FAILURE, payload: error }))
}

export const LOGOUT = 'LOGOUT';
export const logout = () => ({ type: LOGOUT });

// get blog posts
export const LOAD_ALLPOSTS_REQUEST = 'LOAD_ALLPOSTS_REQUEST';
export const LOAD_ALLPOSTS_SUCCESS = 'LOAD_ALLPOSTS_SUCCESS';
export const LOAD_ALLPOSTS_FAILURE = 'LOAD_ALLPOSTS_FAILURE';

export const loadAllPosts = () => dispatch => {
  dispatch({ type: LOAD_ALLPOSTS_REQUEST })
  axiosWithAuth().get('/api/blog/')
    .then(res => dispatch({ type: LOAD_ALLPOSTS_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: LOAD_ALLPOSTS_FAILURE, payload: error }))
}

// load blog post by id
export const LOAD_BLOGPOST_REQUEST = 'LOAD_BLOGPOST_REQUEST';
export const LOAD_BLOGPOST_SUCCESS = 'LOAD_BLOGPOST_SUCCESS';
export const LOAD_BLOGPOST_FAILURE = 'LOAD_BLOGPOST_FAILURE';

export const loadPost = id => dispatch => {
  dispatch({ type: LOAD_BLOGPOST_REQUEST, payload: id })
  axiosWithAuth().get(`/api/blog/${id}`)
    .then(res => dispatch ({ type: LOAD_BLOGPOST_SUCCESS, payload: res.data }))
    .catch(error => dispatch ({ type: LOAD_BLOGPOST_FAILURE, payload: error }))
}

// post a new blog post
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const addPost = (postData, id) => dispatch => {
  dispatch({ type: ADD_POST_REQUEST })
  axiosWithAuth().post(`/api/blog/${id}`, postData)
  .then(res => dispatch({ type: ADD_POST_SUCCESS, payload: res.data }))
  .catch(error => dispatch({ type: ADD_POST_FAILURE, payload: error }))
}

// edit a blog post
export const EDIT_POST_REQUEST = 'EDIT_POST_REQUEST';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE';

export const editPost = (newPostData, id) => dispatch => {
  dispatch({ type: EDIT_POST_REQUEST })
  axiosWithAuth().put(`/api/blog/${id}`, newPostData)
    .then(res => dispatch({ type: EDIT_POST_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: EDIT_POST_FAILURE, payload: error }))
}

// delete blog posts
export const DELETE_BLOGPOST_REQUEST = 'DELETE_BLOGPOST_REQUEST';
export const DELETE_BLOGPOST_SUCCESS = 'DELETE_BLOGPOST_SUCCESS';
export const DELETE_BLOGPOST_FAILURE = 'DELETE_BLOGPOST_FAILURE';

export const deletePost = id => dispatch => {
  dispatch({ type: DELETE_BLOGPOST_REQUEST, payload: id })
  axiosWithAuth().delete(`/api/blog/${id}`)
    .then(res => dispatch({ type: DELETE_BLOGPOST_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: DELETE_BLOGPOST_FAILURE, payload: error }))
}