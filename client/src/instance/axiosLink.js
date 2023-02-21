import axios from "axios";

const axiosLink = axios.create({
  baseURL: "http://localhost:8000/",
  responseType: "json",
});

export default axiosLink;
