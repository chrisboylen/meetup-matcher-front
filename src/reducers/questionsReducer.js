export const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER_QUESTIONS':
      return [...state, action.questions];
    default: 
      return state;
  }
}