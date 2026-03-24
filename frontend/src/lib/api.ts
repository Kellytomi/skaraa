import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const api = axios.create({
  baseURL: `${API_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

// TODO: add request interceptor for auth token
// TODO: add response interceptor for error handling

api.interceptors.request.use((config) => {
  // TODO: attach auth token from session/cookie
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // TODO: handle 401 redirect, token refresh, etc.
    return Promise.reject(error);
  }
);
