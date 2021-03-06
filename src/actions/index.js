export const ADD_RECIPE = 'ADD_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';

export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_INGREDIENTS = 'CHANGE_INGREDIENTS';
 
export const addRecipe = (name, ingredients) => {
  return {
    type: ADD_RECIPE,
    name,
    ingredients
  };
};

export const deleteRecipe = (name) => {
  return {
    type: DELETE_RECIPE,
    name
  }
}

export const editRecipe = (name, ingredients, prevName) => {
  return {
    type: EDIT_RECIPE,
    name,
    ingredients,
    prevName
  }
}

export const changeName = (name) => {
  return {
    type: CHANGE_NAME,
    name
  }
}

export const changeIngredients = (ingredients) => {
  return {
    type: CHANGE_INGREDIENTS,
    ingredients
  }
}