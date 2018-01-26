import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../components/modal';
import Recipe from '../components/recipe';
import { changeName, changeIngredients } from '../actions';

class RecipeList extends Component {
  renderRecipe = (recipe,i) => {
    const { name, ingredients } = recipe;

    return(
      <Recipe key={i} name={name} ingredients={ingredients} i={i} />
    );
  }

  handleAddButtonClick = () => {
    const { changeName, changeIngredients } = this.props;

    changeName('');
    changeIngredients('');
  }

  render() {
    const { recipes } = this.props;
    return (
      <div className="container">
        <div id="accordion" role="tablist">
          {recipes.map((recipe,i) => this.renderRecipe(recipe,i))}
        </div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addRecipeModal" onClick={this.handleAddButtonClick}>Add Recipe</button>
        <Modal id="addRecipeModal" title="Add Recipe" name='' ingredients='' />
      </div>
    );
  }
}

function mapStateToProps({ recipes }) {
  return { recipes };
}

export default connect(mapStateToProps, { changeName, changeIngredients })(RecipeList);