<template>
  <div>
    <h2 class="text-xl font-bold mb-4">Your Tasks</h2>
    <div v-if="loading">Loading tasks...</div>
    <div v-if="error" class="text-red-500">{{ error }}</div>
    <ul v-if="tasks && tasks.length">
      <li v-for="task in tasks" :key="task.id" class="flex items-center justify-between border-b py-2">
        <div class="flex items-center">
          <input
            type="checkbox"
            :checked="task.completed"
            @change="toggleCompleted(task)"
            class="form-checkbox h-5 w-5 text-blue-600 mr-2"
          />
          <span :class="{ 'line-through': task.completed }">{{ task.title }}</span>
        </div>
        <div>
          <button @click="editTask(task)" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded text-sm mr-2">
            Edit
          </button>
          <button @click="deleteTask(task.id)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm">
            Delete
          </button>
        </div>
      </li>
    </ul>
    <p v-else-if="!loading && !error">No tasks found. Add some above!</p>

    <!-- Edit Task Modal/Form -->
    <div v-if="editingTask" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <h3 class="text-lg font-bold mb-4 text-gray-800">Edit Task</h3>
        <input
          type="text"
          v-model="editingTask.title"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
        />
        <label class="inline-flex items-center mt-3">
          <input type="checkbox" v-model="editingTask.completed" class="form-checkbox h-5 w-5 text-blue-600" />
          <span class="ml-2 text-gray-700">Completed</span>
        </label>
        <div class="mt-4 flex justify-end">
          <button @click="saveEdit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">Save</button>
          <button @click="cancelEdit" class="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineExpose } from 'vue';
import axios from 'axios';

const tasks = ref(null);
const loading = ref(true);
const error = ref(null);
const editingTask = ref(null); // To hold the task being edited

const fetchTasks = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await axios.get('http://localhost:8000/api/tasks');
    tasks.value = response.data;
  } catch (err) {
    error.value = 'Error fetching tasks';
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const editTask = (task) => {
  console.log('Editing task:', task);
  editingTask.value = { ...task }; // Create a copy to avoid direct mutation
};

const saveEdit = async () => {
  if (editingTask.value && editingTask.value.title.trim()) {
    try {
      await axios.put(`http://localhost:8000/api/tasks/${editingTask.value.id}`, {
        title: editingTask.value.title,
        completed: editingTask.value.completed,
      });
      editingTask.value = null; // Close modal
      await fetchTasks(); // Refresh the list
    } catch (err) {
      console.error('Error updating task:', err);
      error.value = 'Error updating task';
    }
  }
};

const cancelEdit = () => {
  editingTask.value = null; // Close modal
};

const toggleCompleted = async (task) => {
  try {
    await axios.put(`http://localhost:8000/api/tasks/${task.id}`, {
      title: task.title, // Keep title same
      completed: !task.completed, // Toggle completed status
    });
    await fetchTasks(); // Refresh the list
  } catch (err) {
    console.error('Error toggling task completion:', err);
    error.value = 'Error toggling task completion';
  }
};

const deleteTask = async (id) => {
  if (confirm('Are you sure you want to delete this task?')) {
    try {
      await axios.delete(`http://localhost:8000/api/tasks/${id}`);
      await fetchTasks(); // Refresh the list
    } catch (err) {
      console.error('Error deleting task:', err);
      error.value = 'Error deleting task';
    }
  }
};

onMounted(fetchTasks);

defineExpose({
  fetchTasks,
});
</script>

<style scoped>
/* Add any component specific styles here */
</style>