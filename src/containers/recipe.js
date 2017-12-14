import React from 'react';
import { deleteRecipe } from '../actions';
import { connect } from 'react-redux';
import CardHeader from './card_header';
import CardBody from './card_body';

const Recipe = (props) => {
  return (
    <div className="card">
      <CardHeader i={props.i} name={props.name} />
      <CardBody i={props.i} ingredientsList={props.ingredientsList} name={props.name} ingredients={props.ingredients} />
    </div>
  );
}

export default connect(null, { deleteRecipe })(Recipe);