export const authReducer = (
  state = {
    login: false,
  },
  action
) => {
  switch (action.type) {
    case 'User_login':
      return {
        login: action.payload,
      };

    default:
      return state;
  }
};
