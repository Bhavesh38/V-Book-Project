import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3001", headers: { "Content-Type": "application/json" } });

export const studentRegisteration = (formData) => API.post("/user/register", formData);
