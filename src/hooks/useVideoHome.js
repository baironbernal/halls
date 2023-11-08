import { useState, useRef } from 'react';
const useVideoHome = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
      const video = videoRef.current;
      if (video) {
        if (isPlaying) {
          handleShow()
          
          video.pause(); // Pauses the video
        } else {
          video.play();
          handleClose()
        }
        setIsPlaying(!isPlaying); // Toggle the state
      }
    };


  return { togglePlay, show, videoRef, setShow,handleClose, handleShow  };
};

export default useVideoHome;
