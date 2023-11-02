import { useState } from 'react';
import ZoodiacService from '../services/ZodiacService';


const useZodiacHook = () => {
  const [matchs, setMatchs] = useState('');

  const fetchDataFromLocalJson = async () => {

    try {
      const data = await ZoodiacService.fetchData();
      setMatchs(data);
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };


  return { matchs, fetchDataFromLocalJson };
};

export default useZodiacHook;
