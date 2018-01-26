import { CHANGE_NAME, CHANGE_INGREDIENTS } from '../actions';

const inputReducer = (state = {name: '', ingredients: ''}, action) => {
  switch (action && action.type) {
    case CHANGE_NAME:
      return Object.assign({}, state, {name: action.name});
    case CHANGE_INGREDIENTS:
      return Object.assign({}, state, {ingredients: action.ingredients});
    default:
      return state;
  }
};

export default inputReducer;