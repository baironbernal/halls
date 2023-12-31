import { useState, useEffect } from 'react';

const useCookieFilter = () => {
  const [showModal, setShowModal] = useState(false);
  const [cookieExists, setCookieExists] = useState(false);
  const [action, setAction] = useState(0);
  
  // Check if the cookie exists
  useEffect(() => {
    const checkCookie = () => {
      if (localStorage.getItem('SIGN_STAR')) {
        setCookieExists(true);
        setShowModal(false)
      }
      else {
        setCookieExists(false)
        setShowModal(true)
      }
    };
    
    if(action !== 0) {
      checkCookie();
    };

  }, [action]); // Empty dependency array ensures this runs only once

  const handleClose = () => {
    setShowModal(false)
  };

  return { showModal, handleClose, cookieExists, action, setAction, setShowModal };
};

export default useCookieFilter;
