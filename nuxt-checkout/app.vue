<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import axios from "axios";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import '/src/assets/css/main.css';

  axios.defaults.baseURL = import.meta.env.VITE_API_URL
</script>