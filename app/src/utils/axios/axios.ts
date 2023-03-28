import axios from "axios";

const baseURL = "http://localhsot:5000";

export const Axios = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const ImageAxios = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form/data",
  },
  withCredentials: true,
});
