import axios from 'axios';

export const serverless = axios.create({
    baseUrl:"http://179.50.12.201:8080/",
});