import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { deleteRecipe } from '../actions';
import { connect } from 'react-redux';
import Modal from './modal';

class RecipeList extends Component {
  constructor(props) {
    super(props);
  }

  renderRecipes = (recipe,i) => {
    console.log(recipe);
    const { name, ingredients } = recipe;
    const noSpacesName = name.replace(' ', '');
    const ingredientsList = ingredients.split(',').map(ingredient => <li key={ingredient}>{ingredient.trim()}</li>);
    console.log('name',name);
    console.log('ing', ingredients);
    console.log('no', noSpacesName);
    console.log('ingList', ingredientsList);
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
            <button type="button" className="btn btn-primary">
              Edit
            </button>
            <button type="button" className="btn btn-danger" onClick={() => this.props.deleteRecipe(name)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  // renderButtonClick() {
  //   return (
  //   );
  // }


  render() {
    const { recipes } = this.props;
    return (
      <div className="container">
        <div id="accordion" role="tablist">
          {/* {recipes.map(this.renderRecipes)} */}
          {recipes.map((recipe,i) => this.renderRecipes(recipe,i))}
        </div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#recipeModal">Add Recipe</button>
        <Modal />
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