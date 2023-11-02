import { useEffect, useState } from 'react';
import MapService from '../services/MapService';
import useCookieFilter from './useCookieFilter';

const useFilterMap = () => {
    
    const [city, setCity] = useState('')
    const [category, setCategory] = useState('');
    const [data, setData] = useState({})
    const { showModal } = useCookieFilter();
    
    //Every time that modify (city, category) do getDataByFilters
    useEffect(() => {  
      if (showModal) return;

      getDataByFilters()
     
      }, [city, category]);
    
      //set width resize windows
      
      const getDataByFilters = async () => {
        try {
          const response = await MapService.filterByCityAndCategory({city, category});
          setData(response)
          //setMarkers(data);
          
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };
    

  return {setCategory, setCity,  data, showModal};
};

export default useFilterMap;
