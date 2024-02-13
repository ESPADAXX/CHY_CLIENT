// sidebarReducer.js
const initialState = {
  isAuthOpen: false,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'read':
      return {
        ...state
      };
      case 'add':
          
      return {
        ...state,
        isAuthOpen: false,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
