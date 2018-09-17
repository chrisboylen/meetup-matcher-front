import { combineReducers } from 'redux';
import { meetupsReducer } from './meetupsReducer';
import { userReducer } from './userReducer';
import { questionsReducer } from './questionsReducer';
import { userErrorReducer } from './userErrorReducer';

export const rootReducer = combineReducers({
  meetups: meetupsReducer,
  user: userReducer,
  questions: questionsReducer,
  userError: userErrorReducer
});