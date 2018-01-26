import React from 'react';
import CardHeader from '../components/card_header';
import CardBody from '../components/card_body';

export default (props) => {
  return (
    <div className="card">
      <CardHeader i={props.i} name={props.name} />
      <CardBody i={props.i} name={props.name} ingredients={props.ingredients} />
    </div>
  );
}