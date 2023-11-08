import { useState } from 'react';
import { Figure, Row } from 'react-bootstrap';
import Button from '../button/Button';
import Modal from 'react-bootstrap/Modal';

function ModalPreview({ info, handleDownloadPDF }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const publicURL = process.env.PUBLIC_URL;

  return (
    <>
      <div onClick={handleShow}> 
        <Button titleButton={'Previsualizar'} borderColor={'#00F98C'} />
      </div>

      <Modal show={show} 
      style={{
        backgroundColor: "rgb(1, 103, 49, .7)"
     }}
     contentClassName='modal-content bg-transparent border-0 mb-5'
     dialogClassName="modal-dialog modal-dialog-centered  modal-xl"
     aria-labelledby="example-custom-modal-styling-title"
      onHide={handleClose}>
        <div tabIndex="-1" aria-labelledby="amor-astros-modalLabel" aria-hidden="true">
            <div className="modal-body p-4 rounded-4 mb-5">
               <Row>
                  <Figure className='text-center'>
                        <img className='mw-100' 
                        style={{
                          maxHeight: '700px'  
                        }}
                        src={publicURL + info.imageModal} 
                        alt="Preview" />
                  </Figure>
               </Row>
               
               <div className='mx-auto text-center' onClick={handleDownloadPDF}>
                  <Button titleButton={'Descargar'} borderColor={'#00F98C'} />
               </div>
            </div>
      </div>
      </Modal>
    </>
  );
}

export default ModalPreview;