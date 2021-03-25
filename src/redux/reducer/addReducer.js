export const addReducer = (
  state = {
    Data: [],
  },
  action
) => {
  switch (action.type) {
    case 'GET_Food_Data':
      return {
        Data: action.payload,
      };

    case 'ADD_FOOD':
      // const Datas = [...state.Data];
      const foodId = action.payload;

      const food = state.Data.find (food => food.id === foodId);

      food.count = food.count + 1;

      return {
        ...state,
        Data: [...state.Data, foodId],
      };

    case 'REMOVE_FOOD':
      // const Datas = [...state.Data];
      const foodIds = action.payload;

      const foods = state.Data.find (food => food.id === foodIds);

      foods.count = foods.count - 1;

      return {
        ...state,
        Data: [...state.Data, foodIds],
      };

    default:
      return state;
  }
};
