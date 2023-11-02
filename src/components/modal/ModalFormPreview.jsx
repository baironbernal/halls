import React from 'react'
import { Figure, Modal, Row } from 'react-bootstrap'
import useForm from '../../hooks/useForm';

const ModalFormPreview = ({ show, urlFile, imageModal }) => {
     
   const {  modal } = useForm(); 

  return (
    <div>
      <Modal show={show}
      className='modal'
      style={{
         backgroundColor: modal.primaryColor
      }}
      onHide={() => show}
      contentClassName='modal-content bg-transparent border-0 mb-5'
      dialogClassName="modal-dialog modal-dialog-centered  modal-xl"
      aria-labelledby="example-custom-modal-styling-title">

<div tabIndex="-1" aria-labelledby="amor-astros-modalLabel" aria-hidden="true">
            <div className="modal-body p-4 rounded-4 mb-5">
               <Row>
                  <Figure className='text-center'>
                        <img className='mw-100' src="/images/pages/green/modal/previews/preview-test.png" alt="Preview " />
                  </Figure>
               </Row>
               <div className="border-0 d-flex flex-row justify-content-center my-2 bg-transparent">
                  <button type="submit" style={{ borderColor: modal.buttonColor, background: 'transparent' }} 
                  className="button-general rounded-5 px-4 py-2">Descargar</button>
               </div>
            </div>
      </div>
      </Modal>
    </div>
  )
}

export default ModalFormPreview
