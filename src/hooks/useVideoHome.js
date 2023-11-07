import { useState, useEffect, useRef } from 'react';
const useVideoHome = () => {

    const [showVideo, setShowVideo] = useState(false);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
      const video = videoRef.current;
      if (video) {
        if (isPlaying) {
          video.pause(); // Pauses the video
        } else {
          video.play(); // Resumes playing the video
        }
        setIsPlaying(!isPlaying); // Toggle the state
      }
    };

    useEffect(() => {
      // Event listener function
      const handleEscKeyPress = (event) => {
        if (event.key === 'Escape') {
          console.log("Esc in react")
          setShowVideo(false); // Set the state variable to false when "Escape" is pressed
          togglePlay()
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

    const hideModalVideo = () => {
      setShowVideo(false);
    };

  return { showModalVideo, showVideo, hideModalVideo, togglePlay, videoRef };
};

export default useVideoHome;
