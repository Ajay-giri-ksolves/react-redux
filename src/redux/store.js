import { createStore } from 'redux';
import recipeReducer from './reducer';

var store = createStore(recipeReducer);

export default store;
