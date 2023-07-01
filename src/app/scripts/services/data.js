import axios from "axios";

const URL_API = "https://backend-db-messgs.onrender.com";

const axiosMessenger = axios.create({
  baseURL: URL_API,
});

export default axiosMessenger;
