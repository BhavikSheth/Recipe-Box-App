import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { deleteRecipe } from '../actions';
import { connect } from 'react-redux';
import Modal from './modal';

class RecipeList extends Component {
  renderRecipes = (recipe,i) => {
    const { name, ingredients } = recipe;
    const ingredientsList = ingredients.split(',').map((ingredient, i) => <li key={i}>{ingredient.trim()}</li>);

    return(
      <div key={i} className="card">
        <div className="card-header" role="tab" id={`heading${i}`}>
          <h5 className="mb-0">
            <a data-toggle="collapse" href={`#collapse${i}`} aria-controls={`"collapse${i}`}>
              {name}
            </a>
          </h5>
        </div>

        <div id={`collapse${i}`} className="collapse" role="tabpanel" aria-labelledby={`heading${i}`}>
          <div className="card-block">
            <ol>
              {ingredientsList}
            </ol>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#editRecipeModal${i}`}>
              Edit
            </button>
            <Modal id={`editRecipeModal${i}`} title="Edit Recipe" name={name} ingredients={ingredients} />
            <button type="button" className="btn btn-danger" onClick={() => this.props.deleteRecipe(name)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { recipes } = this.props;
    return (
      <div className="container">
        <div id="accordion" role="tablist">
          {recipes.map((recipe,i) => this.renderRecipes(recipe,i))}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);