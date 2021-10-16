import userReducer from './userReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
      user: userReducer,
      auth: authReducer,
})

export default rootReducer