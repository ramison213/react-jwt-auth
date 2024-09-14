import axios, { AxiosRequestHeaders } from 'axios';

const baseURL = 'http://localhost:3001/api';

const $api = axios.create({
    withCredentials: true, // Automatically adds cookies
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer your_token`
    }
})

// Request interceptor that adds the authorization token from localStorage to the Authorization header

$api.interceptors.request.use((config) => {
    if (!config.headers) {
        config.headers = {} as AxiosRequestHeaders;
    }

    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

    return config;
})

export default $api;