import { combineReducers } from 'redux';
import RecipesReducer from './recipes';
import InputReducer from './input';

const rootReducer = combineReducers({
  recipes: RecipesReducer,
  input: InputReducer
});

export default rootReducer;