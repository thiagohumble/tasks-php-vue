<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Task List</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="tasks">
      <li v-for="task in tasks" :key="task.id" class="border-b py-2">
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const tasks = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/tasks');
    tasks.value = response.data;
  } catch (err) {
    error.value = 'Error fetching tasks';
    console.error(err);
  } finally {
    loading.value = false;
  }
});
</script>
