import { createStore, combineReducers } from 'redux';
import { noteReducer } from './reducers/noteReducer';
const reducers = combineReducers({
  mynote: noteReducer,
});

export const store = createStore(reducers);
