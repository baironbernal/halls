import React from 'react'
import { Figure, Modal, Row } from 'react-bootstrap'

const ModalFormPreview = ({ show, info }) => {
     
   
   const publicURL = process.env.PUBLIC_URL;

  return (
    <div>
      <Modal show={show}
      className='modal'
      style={{
         backgroundColor: "rgb(1, 103, 49, .7)"
      }}
      onHide={() => show}
      contentClassName='modal-content bg-transparent border-0 mb-5'
      dialogClassName="modal-dialog modal-dialog-centered  modal-xl"
      aria-labelledby="example-custom-modal-styling-title">

<div tabIndex="-1" aria-labelledby="amor-astros-modalLabel" aria-hidden="true">
            <div className="modal-body p-4 rounded-4 mb-5">
               <Row>
                  <Figure className='text-center'>
                        <img className='mw-100' 
                        src={publicURL + info.imageModal} 
                        alt="Preview" />
                  </Figure>
               </Row>
               <div className="border-0 d-flex flex-row justify-content-center my-2 bg-transparent">
                  <a
                  className="button-general rounded-5 px-4 py-2">Descargar</a>
               </div>
            </div>
      </div>
      </Modal>
    </div>
  )
}

export default ModalFormPreview
