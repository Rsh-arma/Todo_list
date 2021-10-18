import { createStore } from 'redux';
import listReducer from '../reducer';

let store = createStore(listReducer)
export default store;