<script setup>
import { ref } from 'vue';
import TaskList from './components/TaskList.vue';
import TaskForm from './components/TaskForm.vue';

const taskListRef = ref(null);

const refreshTasks = () => {
  if (taskListRef.value) {
    taskListRef.value.fetchTasks();
  }
};
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6 text-center">Minha Tarefa Minimalista</h1>
    <TaskForm @task-added="refreshTasks" />
    <TaskList ref="taskListRef" />
  </div>
</template>

<style>
/* Existing styles */
</style>