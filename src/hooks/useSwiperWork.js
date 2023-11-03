
import { useState } from 'react';

const useSwiperWork = () => {
  
    
    const [showPreview, setShowPreview] = useState(false);
    const [filePdf, setFilePdf] = useState('');
    const [urlPreview, setUrlPreview] = useState('');

    const publicURL = process.env.PUBLIC_URL;
  
      const photos = [
        {   
            id: 0,
            title: 'Pedir aumento imagen',
            urlImage: '/images/pages/green/pedir-aumento.png',
            urlFile: 'files/previews/pedir-aumento.pdf',
            imageModal: '/images/pages/green/modal/previews/pedir-aumento.png'
  
        },
        {
            id: 1,
            title: 'Pedir vacaciones imagen',
            urlImage: '/images/pages/green/pedir-vacaciones.png',
            urlFile: 'files/previews/pedir-vacaciones.pdf',
            imageModal: '/images/pages/green/modal/previews/pedir-vacaciones.png'
  
        },
        {
            id: 2,
            title: 'Home Office imagen',
            urlImage: '/images/pages/green/home-office.png',
            urlFile: 'files/previews/home-office.pdf',
            imageModal: '/images/pages/green/modal/previews/home-office.png'
  
        },
        {
            id: 3,
            title: 'Salir viernes temprano',
            urlImage: '/images/pages/green/work-slide-1.png',
            urlFile: 'files/previews/salir-viernes-temprano.pdf',
            imageModal: '/images/pages/green/modal/previews/viernes-temprano.png'
  
        }
    ];
  
    
      const handleSlideChange = () => {
        const activeDiv = document.querySelector("#swiper-work .swiper-slide .swiper-slide-visible .swiper-slide-active");
        if(!activeDiv) return;
          setFilePdf(publicURL + activeDiv.getAttribute("data-file-attribute"))
          setUrlPreview(publicURL + activeDiv.getAttribute("data-image-modal-atribute"))
  
        console.log(filePdf, urlPreview, activeDiv)
      };
  
      const handlePreview = () => {
        setShowPreview(true)
      }
  
      const handleDownloadPDF = async () => {
        // Specify the URL of the PDF file
      
        try {
          // Fetch the PDF content from the URL
          const response = await fetch(filePdf);
    
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

  return {
        handleSlideChange , 
        handlePreview, 
        handleDownloadPDF, 
        showPreview, setShowPreview,
        filePdf, setFilePdf,
        urlPreview, setUrlPreview,
        photos
    };
};

export default useSwiperWork;