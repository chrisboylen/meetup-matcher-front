import * as actions from './index';

describe('actions', () => {
  it('should return a type of GET_MEETUPS with meetups', () => {
    const meetups = [{}];
    const expectedAction = {
      type: 'GET_MEETUPS',
      meetups
    };
    const result = actions.getMeetups(meetups);

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
  });
  it('should return a type of LOGOUT_USER with user', () => {
    const expectedAction = { type: 'LOGOUT_USER'};
    const result = actions.logoutUser();

    expect(result).toEqual(expectedAction);
  });
  it('should have type of USER_ERROR', () => {
    const message = 'This email is already on file';
    const expectedAction = {
      type: 'USER_ERROR',
      message
    };
    const result = actions.userError(message);

    expect(result).toEqual(expectedAction);
  });
    expect(result).toEqual(expectedAction);
  });
});