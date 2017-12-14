import React from 'react';
import Modal from './modal';

export default (props) => {
  return (
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
  );
}