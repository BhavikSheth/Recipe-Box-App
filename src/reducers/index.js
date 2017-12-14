import { combineReducers } from 'redux';
import RecipesReducer from './recipes';

const rootReducer = combineReducers({
  recipes: RecipesReducer
});

export default rootReducer;