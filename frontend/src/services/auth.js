import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/auth/'; // Adjust if your backend URL is different

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'login', {
                email: user.email,
                password: user.password
            })
            .then(response => {
                if (response.data.access_token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        return axios.post(API_URL + 'logout').then(() => {
            localStorage.removeItem('user');
        });
    }

    register(user) {
        return axios.post(API_URL + 'register', {
            name: user.name,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    refreshToken() {
        return axios.post(API_URL + 'refresh').then(response => {
            if (response.data.access_token) {
                let user = JSON.parse(localStorage.getItem('user'));
                user.access_token = response.data.access_token;
                user.expires_in = response.data.expires_in;
                localStorage.setItem('user', JSON.stringify(user));
            }
            return response.data;
        });
    }
}

export default new AuthService();