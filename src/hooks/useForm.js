import { useState} from 'react';
import useFolderRoot from './useFolderRoot';
import RegisterService from '../services/RegisterService';
import { useMyState } from '../context/ContextGlobal';


const useForm = () => {

      const { modal } = useFolderRoot();
      const [email, setEmail] = useState('');
      const [name, setName] = useState('');    
      const { handleClose  } = useMyState()
      const [error, setError] = useState(null); // Nuevo estado para almacenar errores

   
      const handleSubmit = async (e) => {
         e.preventDefault();
     
         try {
            await RegisterService.register({ email, name });
            handleClose()
         } catch (error) {
            setError('Error en los datos, por favor completa todos los campos');
         }
      };

  return { handleSubmit, modal, email, name,  setEmail, setName, error};
};

export default useForm;
