import axios from "axios"

const token = localStorage.getItem("@clientToken");

export const Api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
})

export const ApiAuthorized = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
  headers: { Authorization: `Bearer ${token}` },
});