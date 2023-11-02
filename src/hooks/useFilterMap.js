import { useEffect, useState } from 'react';
import MapService from '../services/MapService';

const useFilterMap = () => {
    
    const [city, setCity] = useState('')
    const [category, setCategory] = useState('');
    const [data, setData] = useState({})
    
    //Every time that modify (city, category) do getDataByFilters
    useEffect(() => {  
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
    

  return {setCategory, setCity, data};
};

export default useFilterMap;
