import React, { Component } from 'react';
import { addRecipe } from '../actions/index';
import { editRecipe } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Modal extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      ingredients: ''
    };
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  onIngredientsChange = (event) => {
    this.setState({
      ingredients: event.target.value
    });
  }

  render() {
    console.log('test');
    return (
      <div className="modal fade" id="recipeModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add a Recipe</h5>
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
              <button type="button" className="btn btn-primary"  data-dismiss="modal" onClick={() => this.props.addRecipe(this.state.name, this.state.ingredients)}>Add Recipe</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addRecipe, editRecipe }, dispatch);
}

export default connect(null, mapDispatchToProps)(Modal);