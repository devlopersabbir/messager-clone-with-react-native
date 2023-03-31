import axios from "axios";

export const baseURL = "http://192.168.0.102:5000/api/v1";

export const axiosPublic = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const axiosFileUpload = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
