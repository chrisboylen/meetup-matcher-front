export const meetupsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MEETUPS':
      return action.meetups;
    default: 
      return state;
  }
};
