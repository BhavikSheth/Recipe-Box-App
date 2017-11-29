import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipeList extends Component {
  render() {
    return (
      <div>
      <div id="accordion" role="tablist" aria-multiselectable="true">
      </div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addRecipeModal">
        Add Recipe
      </button>
    </div>
    );
  }
}

function mapStateToProps({ recipes }) {
  return { recipes };
}

export default connect(mapStateToProps)(RecipeList);