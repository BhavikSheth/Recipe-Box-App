import React, { Component } from 'react';
import { addRecipe, editRecipe } from '../actions';
import { connect } from 'react-redux';

class Modal extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      ingredients: ''
    };
  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
      ingredients: this.props.ingredients
    });
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit = () => {
    const { name, ingredients } = this.state;
    const recipeName = name.length ? name : 'Add recipe name';
    const recipeIngredients = ingredients.length ? ingredients : 'Add list of ingredients';

    if (this.props.id === 'addRecipeModal') {
      this.props.addRecipe(recipeName, recipeIngredients);

      this.setState({
        name: '',
        ingredients: ''
      });
    } else {
      this.props.editRecipe(recipeName, recipeIngredients, this.props.name);
    }
  }

  onIngredientsChange = (event) => {
    this.setState({
      ingredients: event.target.value
    });
  }

  render() {
    const { id, title } = this.props;
    return (
      <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">{title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">Recipe Name</label>
                  <input type="text" className="form-control" id="recipient-name" placeholder="Enter Recipe Name" onChange={this.onNameChange} value={this.state.name}/>
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">Ingredients</label>
                  <textarea className="form-control" id="message-text" placeholder="Enter Ingredients (separated by commas)" onChange={this.onIngredientsChange} value={this.state.ingredients}></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary"  data-dismiss="modal" onClick={this.handleSubmit}>{title}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addRecipe, editRecipe })(Modal);