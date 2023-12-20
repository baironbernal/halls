import axios from 'axios';
const API_BASE_URL = 'https://respiraconhalls.com/proyecto/public/';  // Replace with your API base URL

const instance = axios.create({
    baseURL: API_BASE_URL,
});

const RegisterService = {
    
    register: async (person) => {

      try {
        const response = await instance.post('/api/store', person); // Assuming the JSON file is in the root directory
        //If 
        localStorage.setItem('SIGN_STAR', true);
        return response.data;
      } catch (error) {
        throw new Error('Error fetching data from the JSON file');
      }
    },
  };
  
  export default RegisterService;
  