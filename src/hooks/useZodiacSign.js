import { useState, useEffect } from 'react';
import ZodiacService from '../services/ZodiacService';
import { useMyState } from '../context/ContextGlobal';

const useZodiacSign = () => {
    const options = [
        { value: 'all', label: 'Buscar Signo' },
        { value: '1', label: 'Aries' },
        { value: '2', label: 'Tauro' },
        { value: '3', label: 'Geminis' },
        { value: '4', label: 'Cancer' },
        { value: '5', label: 'Leo' },
        { value: '6', label: 'Virgo' },
        { value: '7', label: 'Libra' },
        { value: '8', label: 'Escorpio' },
        { value: '9', label: 'Sagitario' },
        { value: '10', label: 'Capricornio' },
        { value: '11', label: 'Acuario' },
        { value: '12', label: 'Piscis' }
      ];
    const [selectedValue, setSelectedValue] = useState('');
    const { showModal, action, setAction } = useMyState();
    const [information, setInformation] = useState({});
    

    useEffect(() => {
        if(showModal) return;
        fetchInformation()
    }, [selectedValue])
    
    
    const fetchInformation = async () => {
  
      const signalInfo = await ZodiacService.fetchData(selectedValue);
      
      if(signalInfo) {
        setInformation(signalInfo);
      }
    };
  return { 
      options, 
      selectedValue, 
      information, 
      showModal, 
      setSelectedValue,
      setAction,
      action
    };
};

export default useZodiacSign;
