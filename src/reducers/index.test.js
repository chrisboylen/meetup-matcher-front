import { meetupsReducer } from './meetupsReducer';
import { userReducer } from './userReducer';
import * as actions from '../actions';

describe('reducers', () => {
  describe('meetupsReducer', () => {
    it('should return the initial state', () => {
      const expected = [];
      const result = meetupsReducer(undefined, {});

      expect(result).toEqual(expected);
    });
    it('should return state with meetups', () => {
      const initialState = [];
      const meetups = [{name: 'something'}, {name: 'something'}];
      const expected = [...meetups];
      const result = meetupsReducer(initialState, actions.getMeetups(meetups));

      expect(result).toEqual(expected);
    });
  });

  describe('userReducer', () => {
    it('should return the initial state', () => {
      const expected = {};
      const result = userReducer(undefined, {});

      expect(result).toEqual(expected);
    });
    it('should return state with new user', () => {
      const initialState = {};
      const newUser = {name: 'billy', email: 'billy@gmail.com', password: 'billy'};
      const result = userReducer(initialState, actions.loginUser(newUser));

      expect(result).toEqual(newUser);
    });
    it('should logout user', () => {
      const initialState = {name: 'billy', email: 'billy@gmail.com', password: 'billy'};
      const expected = {};
      const result = userReducer(initialState, actions.logoutUser());

      expect(result).toEqual(expected);
    });
  });
});