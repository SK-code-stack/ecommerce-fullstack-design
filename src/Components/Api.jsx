import axios from "axios";

// Local (for development)
// export const BASE_URL = 'http://127.0.0.1:8000'

// Deployed backend on Render
export const BASE_URL = 'https://ecommerce-backend-django-8z5g.onrender.com';

const api = axios.create({
    baseURL: BASE_URL,
    //   withCredentials: true, // send cookies if session auth is used

});

export default api;
