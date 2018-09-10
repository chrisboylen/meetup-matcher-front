import * as actions from './index';

describe('actions', () => {
  it('should return a type of DISPLAY_MEETUPS with meetups', () => {
    const meetups = [{}];
    const expectedAction = {
      type: 'DISPLAY_MEETUPS',
      meetups
    };
    const result = actions.displayMeetups(meetups);
    expect(result).toEqual(expectedAction);
  });
  it('should return a type of LOGIN_USER with user', () => {
    const user = {
      username: 'billy',
      email: 'billy@gmail.com',
      password: 'billy'
    };
    const expectedAction = {
      type: 'LOGIN_USER',
      user: user
    };
    const result = actions.loginUser(user);
    expect(result).toEqual(expectedAction);
  })
});