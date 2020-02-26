import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOAD_ALLPOSTS_REQUEST,
  LOAD_ALLPOSTS_SUCCESS,
  LOAD_ALLPOSTS_FAILURE,
  LOAD_BLOGPOST_REQUEST,
  LOAD_BLOGPOST_SUCCESS,
  LOAD_BLOGPOST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
  DELETE_BLOGPOST_REQUEST,
  DELETE_BLOGPOST_SUCCESS,
  DELETE_BLOGPOST_FAILURE,
  SET_TOKEN,
  LOGOUT
} from '../actions';

const initialState = {
  token: null,
  username: null,
  isAuthenticating: false,
  isLoading: false,
  isAdding: false,
  isEditing: false,
  isDeleting: false,
  currentPost: null,
  needUpdate: false,
  posts: [],
  users: []

}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case SET_TOKEN:
      return {...state, token: action.payload}
    default:
      return state;
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      return {...state, isAuthenticating: true, error: null};
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.getItem('token', action.payload.token);
      return {...state, token: true, isAuthenticating: false, error: null};
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return {...state, isAuthenticating: false, error: action.payload} 
    case LOGOUT:
      localStorage.removeItem('token')
      return {...state, token: false, username: null}//may need to edit this
    case LOAD_BLOGPOST_REQUEST:
      return {...state, needUpdate: false, isLoading: true, error: null}
    case LOAD_BLOGPOST_SUCCESS:
      return {...state, isLoading: false, error: null, currentPost: action.payload}
    case LOAD_BLOGPOST_FAILURE:
      return {...state, isLoading: false, error: action.payload}
    case LOAD_ALLPOSTS_REQUEST:
      return {...state, needUpdate: false, isLoading: true, error: null}
    case LOAD_ALLPOSTS_SUCCESS:
      return {...state, isLoading: false, posts: action.payload}
    case LOAD_ALLPOSTS_FAILURE:
      return {...state, isLoading: false, error: action.payload}
    case ADD_POST_REQUEST:
      return {...state, isAdding: true, error: null}
    case ADD_POST_SUCCESS:
      return {...state, isAdding: false, error: null}
    case ADD_POST_FAILURE:
      return {...state, isAdding: false, error: action.payload}
    case EDIT_POST_REQUEST:
      return {...state, isEditing: true, error: null}
    case EDIT_POST_SUCCESS:
      return {...state, isEditing: false, error: null}
    case EDIT_POST_FAILURE: 
      return {...state, isEditing: false, error: action.payload}
    case DELETE_BLOGPOST_REQUEST: 
      return {...state, isDeleting: true, error: null}
    case DELETE_BLOGPOST_SUCCESS:
      return {...state, needUpdate: false, isDeleting: false, error: null}
    case DELETE_BLOGPOST_FAILURE:
      return {...state, isDeleting: false, error: action.payload}
  }
}

export default reducer;