<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/nav/nav.vue'
</script>

<template>
  <Nav />
<div class="container mx-auto">
   <RouterView />
</div>

</template>

<style scoped>

</style>
