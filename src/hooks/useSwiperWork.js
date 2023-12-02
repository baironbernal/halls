
import { useEffect, useState } from 'react';
import { useMyState } from '../context/ContextGlobal';

const useSwiperWork = () => {
  
    const [showPreview, setShowPreview] = useState(false);
    const [info, setInfo] = useState({});
    const publicURL = process.env.PUBLIC_URL;
    const { showModal, action, setAction, cookieExists, setShowModal } = useMyState();
  
      const photos = [
        {   
            id: 0,
            title: 'Pedir aumento',
            urlImage: '/images/pages/green/pedir-aumento.png',
            urlFile: '/files/previews/pedir-aumento.pdf',
            imageModal: '/images/pages/green/modal/previews/pedir-aumento.png'
  
        },
        {
            id: 1,
            title: 'Pedir vacaciones',
            urlImage: '/images/pages/green/pedir-vacaciones.png',
            urlFile: '/files/previews/pedir-vacaciones.pdf',
            imageModal: '/images/pages/green/modal/previews/pedir-vacaciones.png'
  
        },
        {
            id: 2,
            title: 'Home Office',
            urlImage: '/images/pages/green/home-office.png',
            urlFile: '/files/previews/home-office.pdf',
            imageModal: '/images/pages/green/modal/previews/home-office.png'
  
        },
        {
            id: 3,
            title: 'Salir viernes temprano',
            urlImage: '/images/pages/green/work-slide-1.png',
            urlFile: '/files/previews/salir-viernes-temprano.pdf',
            imageModal: '/images/pages/green/modal/previews/viernes-temprano.png'
  
        }
    ];

    useEffect(() => {
      getInfoFrom()
    }, [])


    const getInfoFrom = () => {
      const parentDiv = document.getElementById("swiper-work"); 
      const bullets = parentDiv.querySelectorAll(".swiper-pagination-bullet"); 
      const activeBulletIndex = Array.from(bullets).findIndex(bullet => bullet.classList.contains('swiper-pagination-bullet-active'));

      if (photos[activeBulletIndex]) {
        setInfo({
          title: photos[activeBulletIndex].title,
          imageModal: photos[activeBulletIndex].imageModal,
          urlFile: publicURL + photos[activeBulletIndex].urlFile
        })
      }
    }
    
    const handleSlideChange = () => {
      getInfoFrom()      
    };
  

      const handleDownloadPDF = async () => {
        if (!cookieExists) return setShowModal(true); 
        setAction(action + 1);
      
        try {
          
          // Fetch the PDF content from the URL
          const response = await fetch(info.urlFile);
    
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
          a.download = info.title;
    
          // Trigger a click event on the anchor element to initiate the download
          a.click();
    
          // Release the Object URL to free up resources
          URL.revokeObjectURL(blobUrl);
        } catch (error) {
          console.error('Error downloading PDF:', error);
        }
      };

  return {
        handleSlideChange,
        handleDownloadPDF, 
        showPreview, setShowPreview,
        info,
        photos
    };
};

export default useSwiperWork;
