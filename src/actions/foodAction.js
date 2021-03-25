import Data from '../Data/data';

export const AddFood = id => dispatch => {
  dispatch ({
    type: 'GET_Food_Data',
    payload: Data,
  });

  dispatch ({
    type: 'ADD_FOOD',
    payload: id,
  });

  dispatch ({type: 'REMOVE_FOOD', payload: id});
};
