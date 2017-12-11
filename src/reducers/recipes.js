import { ADD_RECIPE, DELETE_RECIPE, EDIT_RECIPE } from '../actions'

const recipesReducer = (state = [{name: 'n1', ingredients: 'test1, testt, testtt'}, {name: 'n2', ingredients: 'test2, testt, testtt'}, {name: 'n3', ingredients: 'test3, testt, testtt'}], action) => {
  switch (action && action.type) {
    case ADD_RECIPE:
      return [...state, {name: action.name, ingredients: action.ingredients}];
    case DELETE_RECIPE:
      return state.filter(recipe => recipe.name !== action.name);
    case EDIT_RECIPE:
      return state.map(recipe => recipe.name === action.prevName ? {name: action.newName, ingredients: action.ingredients} : recipe);
    default:
      return state;
  }
};

export default recipesReducer;