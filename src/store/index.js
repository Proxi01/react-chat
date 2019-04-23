import {createStore, applyMiddleware} from 'redux';
import rootReducers from '../reducers';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(){
  return createStore(
    rootReducers,
    applyMiddleware(
      thunkMiddleware
    )
  )
}
