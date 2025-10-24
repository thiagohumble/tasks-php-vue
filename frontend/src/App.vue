<script setup>
import { ref, onMounted } from 'vue';
import TaskList from './components/TaskList.vue';
import TaskForm from './components/TaskForm.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import AuthService from './services/auth';

const taskListRef = ref(null);
const loggedIn = ref(false);
const showRegister = ref(false);

const refreshTasks = () => {
  if (taskListRef.value) {
    taskListRef.value.fetchTasks();
  }
};

const handleLoginSuccess = () => {
  loggedIn.value = true;
  showRegister.value = false;
  refreshTasks();
};

const handleRegistrationSuccess = () => {
  showRegister.value = false; // Go back to login after successful registration
};

const handleLogout = () => {
  AuthService.logout().then(() => {
    loggedIn.value = false;
    // Optionally clear tasks or redirect
  });
};

const checkLoginStatus = () => {
  if (AuthService.getCurrentUser()) {
    loggedIn.value = true;
  } else {
    loggedIn.value = false;
  }
};

onMounted(() => {
  checkLoginStatus();
});
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6 text-center">Minha Tarefa Minimalista</h1>

    <div v-if="!loggedIn" class="auth-section">
      <Login v-if="!showRegister" @login-success="handleLoginSuccess" @show-register="showRegister = true" />
      <Register v-else @registration-success="handleRegistrationSuccess" @show-login="showRegister = false" />
    </div>

    <div v-else class="app-section">
      <div class="flex justify-end mb-4">
        <button @click="handleLogout" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      </div>
      <TaskForm @task-added="refreshTasks" />
      <TaskList ref="taskListRef" />
    </div>
  </div>
</template>

<style>
/* Existing styles */
</style>