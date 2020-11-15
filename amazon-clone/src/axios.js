import axios from "axios";

 const instance = axios.create({
     baseURL: 'http://localhost:5001/challenge-e33f7/us-central1/api'
 });

 export default instance;