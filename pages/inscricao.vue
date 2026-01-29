<template>
  <div></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

const url = 'https://docs.google.com/forms/d/e/1FAIpQLSe0dPCxF_xUkaHiasO5qR4g5FQ7W0XXEiVUQFWl_1d9SN_Q4w/viewform?usp=header'

if (process.client) {
  onMounted(() => {
    // Não cria uma nova entrada no histórico
    window.location.replace(url)
  })
}
</script>
