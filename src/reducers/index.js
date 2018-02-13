import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ClientReducer from './clientReducer';

const reducers = {
  clientStore: ClientReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;