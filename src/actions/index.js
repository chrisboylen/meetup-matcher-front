export const displayMeetups = (meetups) => ({
  type: 'DISPLAY_MEETUPS',
  meetups
});

export const loginUser = (user) => ({
  type: 'LOGIN_USER',
  user
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
});