import React from 'react';

export default (props) => {
  return (
    <div className="card-header" role="tab" id={`heading${props.i}`}>
      <h5 className="mb-0">
        <a data-toggle="collapse" href={`#collapse${props.i}`} aria-controls={`"collapse${props.i}`}>
          {props.name}
        </a>
      </h5>
    </div>
  );
}