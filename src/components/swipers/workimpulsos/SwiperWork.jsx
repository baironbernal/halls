import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../Swiper.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Col, Row } from 'react-bootstrap';
import ModalFormPreview from '../../modal/ModalFormPreview';
import Button from '../../button/Button';

export default function SwiperWork() {
  const publicURL = process.env.PUBLIC_URL;
  const [showPreview, setShowPreview] = useState(false);
  const [filePdf, setFilePdf] = useState('');
  const [urlPreview, setUrlPreview] = useState('');

    const photos = [
      {   
          id: 0,
          title: 'Pedir aumento imagen',
          urlImage: '/images/pages/green/pedir-aumento.png',
          urlFile: 'files/previews/pedir-aumento.pdf',
          imageModal: '/images/pages/green/modal/previews/preview-test.png'

      },
      {
          id: 1,
          title: 'Pedir vacaciones imagen',
          urlImage: '/images/pages/green/pedir-vacaciones.png',
          urlFile: 'files/previews/pedir-vacaciones.pdf',
          imageModal: '/images/pages/green/modal/previews/preview-test.png'

      },
      {
          id: 2,
          title: 'Home Office imagen',
          urlImage: '/images/pages/green/home-office.png',
          urlFile: 'files/previews/home-office.pdf',
          imageModal: '/images/pages/green/modal/previews/preview-test.png'

      },
      {
          id: 3,
          title: 'Salir viernes temprano',
          urlImage: '/images/pages/green/work-slide-1.png',
          urlFile: 'files/previews/salir-viernes-temprano.pdf',
          imageModal: '/images/pages/green/modal/previews/preview-test.png'

      }
  ];

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handleSlideChange = (swiper) => {
      console.log()
      setActiveSlideIndex(swiper.activeIndex);
    };

    const handlePreview = () => {
      console.log("Click", showPreview)
      setShowPreview(true)
    }

    const handleDownloadPDF = async () => {
      // Specify the URL of the PDF file
      const pdfUrl = 'files/previews/test.pdf';
  
      try {
        // Fetch the PDF content from the URL
        const response = await fetch(pdfUrl);
  
        // Check if the fetch was successful
        if (!response.ok) {
          throw new Error('Failed to fetch the PDF file');
        }
  
        // Convert the response to a Blob
        const blob = await response.blob();
  
        // Create a URL for the Blob
        const blobUrl = URL.createObjectURL(blob);
  
        // Create an anchor element and set its href to the Blob URL
        const a = document.createElement('a');
        a.href = blobUrl;
  
        // Set the anchor element to download the PDF file with a specified filename
        a.download = 'test.pdf';
  
        // Trigger a click event on the anchor element to initiate the download
        a.click();
  
        // Release the Object URL to free up resources
        URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error('Error downloading PDF:', error);
      }
    };

  return (
    <>
    <ModalFormPreview show={showPreview}/>
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
            photos.map(({id, urlImage, title}) => (
                <SwiperSlide  
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
          <div onClick={handleDownloadPDF}>
            <Button titleButton={'Descargar'}  borderColor={'#00F98C'} />
          </div>
          </div>
      </Row>
    </>
  );
}
