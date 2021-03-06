import { ADD_RECIPE, DELETE_RECIPE, EDIT_RECIPE } from '../actions'

const recipesReducer = (state = [{name: 'Recipe 1', ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3']}, {name: 'Recipe 2', ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3']}, {name: 'Recipe 3', ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3']}], action) => {
  switch (action && action.type) {
    case ADD_RECIPE:
      return [...state, {name: action.name, ingredients: action.ingredients.split(/\s*,\s*/g)}];
    case DELETE_RECIPE:
      return state.filter(recipe => recipe.name !== action.name);
    case EDIT_RECIPE:
      return state.map(recipe => recipe.name === action.prevName ? {name: action.name, ingredients: action.ingredients.split(/\s*,\s*/g)} : recipe);
    default:
      return state;
  }
};

export default recipesReducer;