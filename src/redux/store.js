import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {addReducer} from './reducer/addReducer';
import {countReducer} from './reducer/getDataReducer';
import {authReducer} from './reducer/authReducer';
const reducer = combineReducers ({
  coutList: countReducer,
  count: addReducer,
  auth: authReducer,
});

const middleware = [thunk];
const store = createStore (
  reducer,
  composeWithDevTools (applyMiddleware (...middleware))
);

export default store;
