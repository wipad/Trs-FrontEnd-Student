import userReducer from './userReducer';
import authReducer from './authReducer';
import registerReducer from './registerReducer';
import assignedReportsReducer from './assignedReportsReducer';
import { combineReducers } from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
      user: userReducer,
      auth: authReducer,
      register: registerReducer,
      assignedReports:assignedReportsReducer
})

export default rootReducer