<template>

  <div class="w-full h-full">

    <div class="w-full h-full rebg"></div>
  </div>
</template>
<script lang="ts" setup>


</script>
<style scoped>
.rebg {
  background-image: radial-gradient(#66666630 5%, transparent 5%),
  linear-gradient(90deg, #ffffff07 1px, transparent 1px),
  linear-gradient(180deg, #00000010 1px, transparent 1px);
  background-size: 30px 30px;
  animation: bgMove 100s infinite linear alternate;
}


@keyframes bgMove {
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: 100% 150%;
  }
}
</style>