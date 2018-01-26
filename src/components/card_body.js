import React, { Component } from 'react';
import Modal from './modal';
import { connect } from 'react-redux';
import { changeName, changeIngredients, deleteRecipe } from '../actions';

class CardBody extends Component {
  handleEditButtonClick = () => {
    this.props.changeName(this.props.name);
    this.props.changeIngredients(this.props.ingredients.join(', '));
  }

  render() {
    const { i, name, ingredients, deleteRecipe } = this.props;
    const listOfIngredients = ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>);

    return (
      <div id={`collapse${i}`} className="collapse" role="tabpanel" aria-labelledby={`heading${i}`}>
        <div className="card-block">
          <ol>
            {listOfIngredients}
          </ol>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#editRecipeModal${i}`} onClick={this.handleEditButtonClick}>
            Edit
          </button>
          <Modal id={`editRecipeModal${i}`} title="Edit Recipe" name={name} ingredients={ingredients} />
          <button type="button" className="btn btn-danger" onClick={() => deleteRecipe(name)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { changeName, changeIngredients, deleteRecipe })(CardBody);