import axios from 'axios'
import { BaseUrl } from "./compounds/constants/constant";
const instance = axios.create({
    baseURL:BaseUrl,
    
  });
  export default instance;