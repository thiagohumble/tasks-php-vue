import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios';
import AuthService from './services/auth'; // Import AuthService

// Axios Interceptor to attach JWT token
axios.interceptors.request.use(
    config => {
        const user = AuthService.getCurrentUser();
        if (user && user.access_token) {
            config.headers.Authorization = 'Bearer ' + user.access_token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

createApp(App).mount('#app')
