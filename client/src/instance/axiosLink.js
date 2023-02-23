import axios from "axios";

const axiosLink = axios.create({
  baseURL: "https://vt-coffee-api.onrender.com//",
  responseType: "json",
});

export default axiosLink;
