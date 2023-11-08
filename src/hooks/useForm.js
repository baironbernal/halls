import { useState} from 'react';
import useFolderRoot from './useFolderRoot';
import RegisterService from '../services/RegisterService';

const useForm = () => {

      const { modal } = useFolderRoot();
      const [email, setEmail] = useState('');
      const [name, setName] = useState('');    
   
      const handleSubmit = async (e) => {
         e.preventDefault();
     
         try {
            await RegisterService.register({ email, name });
            alert('Data has been successfully stored!');
         } catch (error) {
            alert('Error storing data.');
         }
      };

  return { handleSubmit, modal, email, name,  setEmail, setName};
};

export default useForm;
