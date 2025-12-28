import axios from "axios";
import { logout } from "../store/slices/authSlice";
import type { TMovie } from "../types/api.types";
import { useAppDispatch } from "../hooks/useAppDispatch";

const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api` || "http://localhost:8080/api";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            useAppDispatch()(logout());
            localStorage.removeitem("token");
        }
        return Promise.reject(error);
    }
);

export const moviesAPI = {
    getAll: (page = 1, limit = 20) =>
        api.get(`/movies?page=${page}&limit=${limit}`).then(res => res.data),

    search: (query: string) =>
        api.get(`/movies/search?q=${encodeURIComponent(query)}`).then(res => res.data),

    getById: (id: string) =>
        api.get(`/movies/${id}`).then(res => res.data as TMovie),

    create: (data: Partial<TMovie>) =>
        api.post(`/movies`, data).then(res => res.data),

    update: (id: string, data: Partial<TMovie>) =>
        api.put(`/movies/${id}`, data).then(res => res.data),

    delete: (id: string) =>
        api.delete(`/movies/${id}`).then(res => res.data),
};

export const authAPI = {
    login: (credentials: { email: string; password: string }) =>
        api.post(`/auth/login`, credentials).then(res => res.data ),

    register: (data: { name: string; email: string; password: string }) =>
        api.post(`/auth/register`, data).then(res => res.data),
};

export default api;
