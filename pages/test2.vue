<template>
  <div v-for="(item,index) in user" :key="index">
      {{item}}
  </div>
</template>
<script setup lang="ts">
const supabase = useSupabaseClient();
const user = ref([]);
onMounted(async()=>{
  const {data} = await supabase.from('user').select("*")
  user.value = data;

})
</script>

<style scoped>

</style>