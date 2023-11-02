import { useState, useEffect } from 'react';
const useVideoHome = () => {

    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
      // Event listener function
      const handleEscKeyPress = (event) => {
        if (event.key === 'Escape') {
          setShowVideo(false); // Set the state variable to false when "Escape" is pressed
        }
      };
  
      // Add the event listener when the component mounts
      document.addEventListener('keydown', handleEscKeyPress);
  
      // Clean up the event listener when the component unmounts
      return () => {
        document.removeEventListener('keydown', handleEscKeyPress);
      };
    }, []); // Empty dependency array to ensure the effect runs once
  
  
    const showModalVideo = () => {
      setShowVideo(true);
    };

  return { showModalVideo, showVideo };
};

export default useVideoHome;
