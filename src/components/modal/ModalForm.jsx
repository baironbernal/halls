import React from 'react'
import { Modal } from 'react-bootstrap'
import useForm from '../../hooks/useForm';
import { useMyState } from '../../context/ContextGlobal';
import './Modal.css';

const ModalForm = () => {
     
   const publicURL = process.env.PUBLIC_URL;
   const { handleSubmit, modal, email, name,  setEmail, setName, error} = useForm(); 
   const { showModal, handleClose  } = useMyState()

  return (
    <div>
      <Modal show={showModal}
      className='modal'
      style={{
         backgroundColor: modal.primaryColor
      }}
      onHide={() => handleClose}
      contentClassName='modal-content bg-transparent border-0 mb-5'
      dialogClassName="modal-dialog modal-dialog-centered  modal-xl"
      aria-labelledby="example-custom-modal-styling-title">

<div tabIndex="-1" aria-labelledby="amor-astros-modalLabel" aria-hidden="true">
    <div className="modal-header flex-row justify-content-center border-0 my-4 ">
            <div className="modal-header-banner align-self-center">
               <div className="row justify-content-md-center">
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                     <img className="d-block mw-100 mx-auto" 
                           src={publicURL + modal.headerImage} 
                           alt="Respira y toma un impulso" />
                     <p className="my-4 ff-gotham-bold text-white">{modal.description}</p>
                  </div>
               </div>
            </div>
            
               <img src={publicURL + "/images/icons/close.svg"} alt="close button"
                  onClick={handleClose} className='d-block align-self-baseline'
                />
         </div>
         <form onSubmit={handleSubmit}>
            <div className="modal-body bg-white p-4 rounded-4 mb-5">
               <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6 col-lg-x">
                     <label htmlFor="inputEmail4" className="ms-2 text-start d-block form-label fs-6 fc-gray-soft">Nombre:</label>
                     <input type="text" 
                           style={{ backgroundColor: modal.inputColor }} 
                           className="form-control rounded-4" 
                           value={name} 
                           onChange={(e) => setName(e.target.value)}
                           aria-label="First name" />
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 col-lg-x">
                     <label htmlFor="inputEmail4" className="ms-2 text-start d-block form-label fs-6 fc-gray-soft">Email:</label>
                     <input type="email" 
                           style={{ backgroundColor: modal.inputColor }} 
                           className="form-control rounded-4" 
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           aria-label="Email" />
                  </div>
               </div>
               <div className="row">
                  <div className="form-check d-flex justify-content-center gap-1 my-4">
                     <input className="form-check-input" type="checkbox" id="defaultCheck1"  />
                     <label className="form-check-label fc-gray-soft" htmlFor="defaultCheck1" v>
                     Acepta términos y condiciones
                     </label>  
                  </div>
               </div>
               {
                        error && (
                           <div className="row text-center">
                              <p className='ff-gotham-bold' style={{
                                 color: 'red',
                                 fontSize: '12px'
                              }}>{error}</p>
                           </div>
                        )
                     }
               <div className="border-0 d-flex flex-row justify-content-center my-2 bg-transparent">
                  <button type="submit" style={{ backgroundColor: modal.buttonColor }} className="d-block text-center text-white px-5 py-2 border-0 rounded-4">Enviar</button>
               </div>
            </div>
         </form>
         <div className="row halls-text text-start mt-5">
            <a className="navbar-brand" href="/">
            <img className="w-auto mb-3 " src={publicURL + "/images/logos/halls-white.svg"} alt="Halls Logo" />
            </a>
            <p className="ff-gotham-medium text-white"> 
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de</p>
         </div>
      </div>
      </Modal>
    </div>
  )
}

export default ModalForm
