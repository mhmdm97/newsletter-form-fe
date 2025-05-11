import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Set your API base URL here
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors can be added here for request/response handling if needed

export default apiClient;