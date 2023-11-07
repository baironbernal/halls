import React from 'react'
import { Modal, Row } from 'react-bootstrap'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Modal.css';

import { Navigation } from 'swiper/modules';


const ModalVideo = ({show}) => {

  return (
    <div>
      <Modal show={show}
      className='modal modal-video'
      contentClassName='modal-content bg-transparent border-0 mb-5'
      dialogClassName="modal-dialog modal-dialog-centered  modal-xl"
      aria-labelledby="example-custom-modal-styling-title">

<div tabIndex="-1" aria-labelledby="amor-astros-modalLabel" aria-hidden="true">
            <div className="modal-body p-4 rounded-4 mb-5">
               <Row>
               <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                    <iframe style={{ height: '80vh', width:'100%' }} 
                              title="Halls Campaing"
                              src="https://www.youtube.com/embed/9gRc242BjRA?autoplay=1&loop=1" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <iframe style={{ height: '90vh'}} width="100%" 
                              title="Halls second Campaing"
                              src="https://www.youtube.com/embed/ElEGLYdsJPU?autoplay=1&mute=1&loop=1" />
                    </SwiperSlide>
                  </Swiper>
               </Row>
            </div>
      </div>
      </Modal>
    </div>
  )
}

export default ModalVideo
