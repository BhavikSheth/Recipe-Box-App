import React from 'react';

export default (props) => {
  const { title } = props;

  return (
    <div className="modal-header">
      <h5 className="modal-title" id="modalLabel">{title}</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}