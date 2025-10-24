<template>
    <div class="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
        <form @submit.prevent="handleLogin">
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
            <div class="mb-6">
                <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                <input
                    type="password"
                    id="password"
                    v-model="user.password"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div class="flex items-center justify-between">
                <button
                    type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Login
                </button>
                <button
                    type="button"
                    @click="$emit('show-register')"
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                    Register
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
    name: 'Login',
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            message: ''
        };
    },
    methods: {
        handleLogin() {
            this.message = '';
            AuthService.login(this.user).then(
                () => {
                    this.$emit('login-success');
                },
                error => {
                    this.message = (error.response && error.response.data && error.response.data.message) ||
                        error.message ||
                        error.toString();
                }
            );
        }
    }
};
</script>

<style scoped>
/* Add any component specific styles here */
</style>