export const meetupsReducer = (state = [], action) => {
  switch (action.type) {
    case 'DISPLAY_MEETUPS':
      return action.meetups;
    default: 
      return state;
  }
};
