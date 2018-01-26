import React from 'react';
import ModalHeader from './modal_header';
import ModalBody from './modal_body';
import ModalFooter from './modal_footer';

export default (props) => {
  const { title, id, name } = props;
  return (
    <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <ModalHeader title={title} />
          <ModalBody />
          <ModalFooter title={title} id={id} name={name} />
        </div>
      </div>
    </div>
  );
}