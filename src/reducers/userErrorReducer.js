export const userErrorReducer = (state = '', action) => {
  switch (action.type) {
    case 'USER_ERROR':
      return action.message
    default:
      return state
  }
}