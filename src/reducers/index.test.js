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
      const result = meetupsReducer(initialState, actions.displayMeetups(meetups));

      expect(result).toEqual(expected);
    });
  });
});