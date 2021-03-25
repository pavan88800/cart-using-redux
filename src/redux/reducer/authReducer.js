export const authReducer = (
  state = {
    login: true,
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
