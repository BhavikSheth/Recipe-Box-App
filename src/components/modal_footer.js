import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe, editRecipe } from '../actions';

class ModalFooter extends Component {
  handleSubmit = () => {
    const { input, id, addRecipe, editRecipe, name } = this.props;
    const recipeName = input.name.length ? input.name : 'Add recipe name';
    const recipeIngredients = input.ingredients.length ? input.ingredients : 'Add list of ingredients';

    if (id === 'addRecipeModal') {
      addRecipe(recipeName, recipeIngredients);
    } else {
      editRecipe(recipeName, recipeIngredients, name);
    }
  }

  render() {
    return (
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary"  data-dismiss="modal" onClick={this.handleSubmit}>{this.props.title}</button>
      </div>
    );
  }
}

function mapStateToProps({ input }) {
  return { input }
}

export default connect(mapStateToProps,{ addRecipe, editRecipe })(ModalFooter);