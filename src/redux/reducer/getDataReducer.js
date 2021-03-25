export const countReducer = (
  state = {
    cartLists: [],
    loading: true,
  },
  action
) => {
  switch (action.type) {
    case 'PRODUCT_LIST_REQUEST':
      return {loading: true, cartLists: []};
    case 'PRODUCT_LIST_SUCCESS':
      return {
        loading: false,
        cartLists: action.payload,
      };
    default:
      return state;
  }
};
