import axios from 'axios';

export const fakeApi = axios.create({
    baseURL: 'https://bestsweather.herokuapp.com'
})

export const weatherApi = axios.create({
    baseURL: 'http://api.weatherapi.com/v1'
})