import React from 'react';
import { deleteRecipe } from '../actions';
import { connect } from 'react-redux';
import Modal from './modal';

const Recipe = (props) => {
  return (
    <div className="card">
    <div className="card-header" role="tab" id={`heading${props.i}`}>
      <h5 className="mb-0">
        <a data-toggle="collapse" href={`#collapse${props.i}`} aria-controls={`"collapse${props.i}`}>
          {props.name}
        </a>
      </h5>
    </div>

    <div id={`collapse${props.i}`} className="collapse" role="tabpanel" aria-labelledby={`heading${props.i}`}>
      <div className="card-block">
        <ol>
          {props.ingredientsList}
        </ol>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#editRecipeModal${props.i}`}>
          Edit
        </button>
        <Modal id={`editRecipeModal${props.i}`} title="Edit Recipe" name={props.name} ingredients={props.ingredients} />
        <button type="button" className="btn btn-danger" onClick={() => this.props.deleteRecipe(props.name)}>
          Delete
        </button>
      </div>
    </div>
  </div>
  );
}

export default connect(null, { deleteRecipe })(Recipe);