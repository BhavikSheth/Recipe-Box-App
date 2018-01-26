import React, { Component } from 'react';
import { changeName, changeIngredients } from '../actions';
import { connect } from 'react-redux';

class ModalBody extends Component {
  onNameChange = (event) => {
    this.props.changeName(event.target.value);
  }

  onIngredientsChange = (event) => {
    this.props.changeIngredients(event.target.value);
  }

  render() {
    
    return (
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">Recipe Name</label>
            <input type="text" className="form-control" id="recipient-name" placeholder="Enter Recipe Name" onChange={this.onNameChange} value={this.props.input.name}/>
          </div>
          <div className="form-group">
            <label htmlFor="message-text" className="col-form-label">Ingredients</label>
            <textarea className="form-control" id="message-text" placeholder="Enter Ingredients (separated by commas)" onChange={this.onIngredientsChange} value={this.props.input.ingredients}></textarea>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ input }) {
  return { input };
}

export default connect(mapStateToProps, { changeName, changeIngredients })(ModalBody);