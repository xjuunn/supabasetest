<template>
  <div class="box grid grid-cols-5 gap-2">
    <div v-for="item in 100" :key="item" class="test reveal border rounded h-20"></div>
  </div>
</template>

<script setup lang="ts">
const { $sr } = useNuxtApp()
onMounted(()=>{
  $sr.reveal('.test', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    reset: true
  })
})

</script>

<style scoped>

</style>