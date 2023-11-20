import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GlobalService from '../services/GlobalService';

const useFolderRoot = () => {

    const location = useLocation();
    const [navbar, setNavbar] = useState({});
    const [modal, setModal] = useState({});
    const [otherCategory, setOtherCategory] = useState({});
    const [conversations, setConversations] = useState({});

  // Check the page current and put the root folder for the images, colors and others
  useEffect(() => {

    const setConfig = async () => {
        const configPage = await GlobalService.fetchData(location.pathname);
        if(configPage) {
            setNavbar(configPage.navbar);
            setModal(configPage.modal);
            if(configPage.categories) setOtherCategory(configPage.categories)
            if(configPage.conversations) setConversations(configPage.conversations)
        }
    };

    setConfig();
  }, [location.pathname]); // Depends of location name (Url)

  return { navbar,  modal, otherCategory, conversations};
};

export default useFolderRoot;
