import axios from 'axios';

//define the base url
const baseURL ='http://localhost:3000/api/v1';

//create an instance of axios
const instance = axios.create({
    baseURL,
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
        
    },
    withCredentials: true,
});

export default instance;