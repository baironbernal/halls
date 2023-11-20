import jsonData from '../data/signal.json'

const ZodiacService = {
    fetchData: async (signal) => {

      const filteredData = jsonData.filter(item => item.id == signal);

        if(filteredData) {
          console.log(jsonData[signal])
            return jsonData[signal]
        };
        return false;
    },
  };
  
  export default ZodiacService;
  