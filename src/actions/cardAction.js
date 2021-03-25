import Data from '../Data/data';
// import axios from 'axios';

export const sendData = () => dispatch => {
  dispatch ({type: 'PRODUCT_LIST_REQUEST'});

  dispatch ({type: 'PRODUCT_LIST_SUCCESS', payload: Data});
};
