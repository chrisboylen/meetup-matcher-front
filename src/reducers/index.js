import { combineReducers } from 'redux';
import { meetupsReducer } from './meetupsReducer';

export const rootReducer = combineReducers({
  meetups: meetupsReducer
});