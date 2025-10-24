<template>
  <form @submit.prevent="handleSubmit" class="mb-4">
    <input
      type="text"
      v-model="newTaskTitle"
      placeholder="Add a new task"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
    >
      Add Task
    </button>
  </form>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import axios from 'axios';

const newTaskTitle = ref('');
const emit = defineEmits(['task-added']);

const handleSubmit = async () => {
  if (newTaskTitle.value.trim()) {
    try {
      await axios.post('http://localhost:8000/api/tasks', {
        title: newTaskTitle.value,
        completed: false,
      });
      newTaskTitle.value = '';
      emit('task-added');
      console.log('Task added successfully!');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  }
};
</script>

<style scoped>
/* Add any component specific styles here */
</style>