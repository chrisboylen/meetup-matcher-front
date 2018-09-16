import { combineReducers } from 'redux';
import { meetupsReducer } from './meetupsReducer';
import { userReducer } from './userReducer';
import { questionsReducer } from './questionsReducer';

export const rootReducer = combineReducers({
  meetups: meetupsReducer,
  user: userReducer,
  questions: questionsReducer
});