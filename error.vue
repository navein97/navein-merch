<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <h1 class="mt-7 text-7xl font-bold">{{ error.statusCode }}</h1>
    <p class="mt-7 text-5xl">Oops! That page is missing.</p>
    <button class="my-7 btn" @click="handleClearError">HOME</button>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });
</script>

<style scoped>
.card {
  padding: 30px;
  border-radius: 5px;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
