import { useState, useEffect } from 'react';

const useCookieFilter = () => {
  const [showModal, setShowModal] = useState(false);
  const [cookieExists, setCookieExists] = useState(false);

  // Check if the cookie exists
  useEffect(() => {
    const checkCookie = () => {
      if (!localStorage.getItem('SIGN_STAR')) {
       return (
        setCookieExists(false),
        setShowModal(false)
       )
      }
      return (
        setCookieExists(true),
        setShowModal(false)
      )
    };

    checkCookie();
  }, []); // Empty dependency array ensures this runs only once

  const handleClose = () => setShowModal(false);

  return { showModal, handleClose, cookieExists };
};

export default useCookieFilter;
