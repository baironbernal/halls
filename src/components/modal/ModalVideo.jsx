import React from 'react'
import { Modal, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import useVideoHome from '../../hooks/useVideoHome';


const ModalVideo = ({show}) => {
  const publicURL = process.env.PUBLIC_URL;
     
  return (
    <div>
      <Modal show={show}
      className='modal'
      contentClassName='modal-content bg-transparent border-0 mb-5'
      dialogClassName="modal-dialog modal-dialog-centered  modal-xl"
      aria-labelledby="example-custom-modal-styling-title">


<div tabIndex="-1" aria-labelledby="amor-astros-modalLabel" aria-hidden="true">
            <div className="modal-body p-4 rounded-4 mb-5">
               <Row>
                <Carousel>
                    <Carousel.Item>
                        <iframe style={{ height: '90vh'}} width="100%" 
                        title="Halls Campaing"
                        src="https://www.youtube.com/embed/9gRc242BjRA?autoplay=1&mute=1" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <iframe style={{ height: '90vh'}} width="100%" 
                        title="Halls second Campaing"
                        src="https://www.youtube.com/embed/ElEGLYdsJPU" />
                      </Carousel.Item>
                  </Carousel>
                  
               </Row>
            </div>
      </div>
      </Modal>
    </div>
  )
}

export default ModalVideo
