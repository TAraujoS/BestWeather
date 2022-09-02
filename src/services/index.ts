import axios from "axios";

export const fakeApi = axios.create({
  baseURL: "https://bestsweather.herokuapp.com",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export const weatherApi = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
  timeout: 5000,
});
