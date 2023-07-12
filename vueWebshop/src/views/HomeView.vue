<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <h1 class="text-5xl text-red-400 font-bold mt-5">Welkom in onze webshop!</h1>
    <p class="mb-5">we verkopen de beste en coolste producten!
    </p>

    <Router-link to="/products" class="hover:text-red-400 ease-in duration-200 p-5 bg-red-400 rounded hover:bg-white border-2 border-red-400"><font-awesome-icon icon="fa-solid fa-bag-shopping" /> see products</Router-link>
  </main>
</template>
