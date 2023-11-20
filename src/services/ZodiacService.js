import jsonData from '../data/signal.json'

const ZodiacService = {
    fetchData: async (signal) => {

      const filteredData = jsonData.filter((item) => parseInt(signal) === item.id );

        if(filteredData) {
            return filteredData[0]
        };
        return false;
    },
  };
  
  export default ZodiacService;
  