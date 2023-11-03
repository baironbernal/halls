import React  from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../Swiper.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Row } from 'react-bootstrap';
import ModalFormPreview from '../../modal/ModalFormPreview';
import Button from '../../button/Button';
import useSwiperWork from '../../../hooks/useSwiperWork';

const SwiperWork = () => {
  const publicURL = process.env.PUBLIC_URL;
  const {
    handleSlideChange , 
    handlePreview, 
    showPreview,
    urlPreview,
    photos
} = useSwiperWork();

  return (
    <>
      <Swiper
        id='swiper-work'
        className='swiper p-0 my-4 w-75 h-100'
        effect={'coverflow'}
        centeredSlides={true}
        initialSlide={1}
        centeredSlidesBounds={false}
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        loop={true}
        navigation={true}
        coverflowEffect={{
          rotate: 0,
            stretch: 70,
            depth: 200,
            modifier: 1,
            slideShadows: true, 
            
        }}
        breakpoints={{
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 0
          }
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}>
        {
            photos.map(({id, urlImage, title, imageModal, urlFile}) => (
                <SwiperSlide  
                data-file-attribute={ urlFile}
                data-image-modal-atribute = {imageModal}
                key={id}
                className='swiper-slide'>
                    <img className='rounded-4' src={publicURL + urlImage} alt={title} />
                </SwiperSlide>
            ))
        }
      </Swiper>
      <Row className='mt-3'>
        <p className='text-white ff-gotham-bold fs-5'>
        ¿Con cuál te atreves?
        </p>
      </Row>
      <Row>
          <div className="d-flex justify-content-center gap-3">
          <div onClick={handlePreview}>
            <Button 
              titleButton={'Previsualizar'} 
              borderColor={'#00F98C'} />
          </div>
          <div >
            <Button titleButton={'Descargar'}  borderColor={'#00F98C'} />
          </div>
          </div>
      </Row>

      <ModalFormPreview 
      urlPreview={urlPreview} 
      show={showPreview}/>
    </>
  );
}


export default SwiperWork