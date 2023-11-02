import jsonData from '../data/global-config.json'

const GlobalService = {
    fetchData: async (pageName) => {
        if(jsonData[pageName]) {
            return jsonData[pageName]
        };
        return false;
    },
    
  };
  
  export default GlobalService;
  