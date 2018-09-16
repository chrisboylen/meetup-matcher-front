export const getMeetups = (meetups) => ({
  type: 'GET_MEETUPS',
  meetups
});

export const loginUser = (user) => ({
  type: 'LOGIN_USER',
  user
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
});

export const userError = (message) => ({
  type: 'USER_ERROR',
  message
});