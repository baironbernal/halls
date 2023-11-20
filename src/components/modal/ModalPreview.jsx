import { useState } from 'react';
import { Figure, Row } from 'react-bootstrap';
import Button from '../button/Button';
import Modal from 'react-bootstrap/Modal';
import { useMyState } from '../../context/ContextGlobal';
import ModalForm from './ModalForm';

function ModalPreview({ info, handleDownloadPDF }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const { showModal, action, setAction } = useMyState(); 

  const handleShow = () => {
    setAction(action + 1);
    setShow(true);
  }
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
                    <img src={publicURL + "/images/icons/close-preview.png"} 
                    onClick={handleClose}
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      cursor: 'pointer',
                    }}  
                    alt="Logo cerrar" />
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
      <div className="mt-0 p-0">
          <ModalForm />
        </div>
    </>
  );
}

export default ModalPreview;