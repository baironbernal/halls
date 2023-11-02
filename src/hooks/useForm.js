import { useState, useEffect } from 'react';
import useCookieFilter from './useCookieFilter';
import useFolderRoot from './useFolderRoot';
import RegisterService from '../services/RegisterService';

const useForm = () => {

    const [show, setShow] = useState(false);

      const { handleClose, showModal } =  useCookieFilter();
      const { modal } = useFolderRoot();
      const [email, setEmail] = useState('');
      const [name, setName] = useState('');    
      
      useEffect(() => {
         setShow(showModal)

      }, [showModal])
      
   
      const handleSubmit = async (e) => {
         e.preventDefault();
     
         try {
            await RegisterService.register({ email, name });
            alert('Data has been successfully stored!');
            setShow(false);
         } catch (error) {
            alert('Error storing data.');
         }
      };

  return { handleSubmit, handleClose, show, modal, email, name,  setEmail, setName, setShow};
};

export default useForm;
