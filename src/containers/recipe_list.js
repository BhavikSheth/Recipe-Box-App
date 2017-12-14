import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './modal';
import Recipe from './recipe';

class RecipeList extends Component {
  renderRecipe = (recipe,i) => {
    const { name, ingredients } = recipe;
    const ingredientsList = ingredients.split(/\s*,\s*/g).map((ingredient, i) => <li key={i}>{ingredient}</li>);

    return(
      <Recipe key={i} name={name} ingredients={ingredients} ingredientsList={ingredientsList} i={i} />
    );
  }

  render() {
    const { recipes } = this.props;
    return (
      <div className="container">
        <div id="accordion" role="tablist">
          {recipes.map((recipe,i) => this.renderRecipe(recipe,i))}
        </div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addRecipeModal">Add Recipe</button>
        <Modal id="addRecipeModal" title="Add Recipe" name='' ingredients='' />
      </div>
    );
  }
}

function mapStateToProps({ recipes }) {
  return { recipes };
}

export default connect(mapStateToProps)(RecipeList);