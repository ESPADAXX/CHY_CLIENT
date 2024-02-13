// sidebarReducer.js
const initialState = {
  isAuthOpen: false,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_AUTHENTICATION_COMPONENET':
      return {
        ...state,
        isAuthOpen: true,
      };
    case 'CLOSE_AUTHENTICATION_COMPONENET':
      return {
        ...state,
        isAuthOpen: false,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
