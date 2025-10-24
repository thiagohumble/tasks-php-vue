<template>
    <div class="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
        <form @submit.prevent="handleRegister">
            <div class="mb-4">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                <input
                    type="text"
                    id="name"
                    v-model="user.name"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div class="mb-4">
                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input
                    type="email"
                    id="email"
                    v-model="user.email"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                <input
                    type="password"
                    id="password"
                    v-model="user.password"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div class="mb-6">
                <label for="password_confirmation" class="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
                <input
                    type="password"
                    id="password_confirmation"
                    v-model="user.password_confirmation"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div class="flex items-center justify-between">
                <button
                    type="submit"
                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Register
                </button>
                <button
                    type="button"
                    @click="$emit('show-login')"
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                    Back to Login
                </button>
            </div>
            <div v-if="message" class="mt-4 text-red-500 text-center">
                {{ message }}
            </div>
        </form>
    </div>
</template>

<script>
import AuthService from '../services/auth';

export default {
    name: 'Register',
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            message: ''
        };
    },
    methods: {
        handleRegister() {
            this.message = '';
            AuthService.register(this.user).then(
                response => {
                    this.message = response.data.message + '. Please login.';
                    this.$emit('registration-success');
                },
                error => {
                    this.message = (error.response && error.response.data && error.response.data.message) ||
                        error.message ||
                        error.toString();
                    if (error.response && error.response.data && typeof error.response.data === 'object') {
                        this.message = Object.values(error.response.data).flat().join(' ');
                    }
                }
            );
        }
    }
};
</script>

<style scoped>
/* Add any component specific styles here */
</style>