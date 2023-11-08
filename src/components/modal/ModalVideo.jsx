import React from 'react'
import { Modal, Row } from 'react-bootstrap'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Modal.css';

import { Navigation } from 'swiper/modules';
import useVideoHome from '../../hooks/useVideoHome';

const ModalVideo = () => {

  const publicURL = process.env.PUBLIC_URL;

  const { togglePlay, show, videoRef, handleClose } = useVideoHome();

  return (
    <div>
      <div className="video-home spacing-halls" onClick={togglePlay}>
            <Row>
              <div className="video-halls">
                <video ref={videoRef} autoPlay muted loop className="mainVideo" >
                  <source src={publicURL+"/video/video-hub1.mp4"} type="video/mp4" muted />
                </video>
                <div className="opacity-halls">
                  <img
                    src={publicURL+'/images/home/playIcon.svg'}
                    alt="Icon Svg"
                    className="playicon"
                  />
                </div>
              </div>
            </Row>
          </div> 

          <Modal show={show} 
          onHide={handleClose} 
          contentClassName='modal-content bg-transparent border-0 mb-5'
           dialogClassName="modal-dialog modal-dialog-centered  modal-xl"
          className='modal modal-video'>
            <Modal.Body>
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
            </Modal.Body>
          </Modal>
    </div>
  )
}

export default ModalVideo
