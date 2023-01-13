import axios from "axios";

const instant = axios.create({
  baseURL: "http://localhost:8000/",
  responseType: "json",
});

export default instant;
