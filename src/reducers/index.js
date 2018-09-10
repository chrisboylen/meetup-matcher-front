import { combineReducers } from 'redux';
import { meetupsReducer } from './meetupsReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  meetups: meetupsReducer,
  user: userReducer
});