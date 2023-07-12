<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header class="flex justify-between p-5 bg-stone-900 text-white">
        <Router-link to="/" class="hover:text-red-400 ease-in duration-200">webshop</Router-link>
        <nav class="flex gap-5">
            <Router-link to="/products" class="hover:text-red-400 ease-in duration-200"><font-awesome-icon icon="fa-solid fa-bag-shopping" /> Products</Router-link>
            <Router-link to="/cart" class="hover:text-red-400 ease-in duration-200"><font-awesome-icon icon="fa-solid fa-cart-shopping" /> Cart</Router-link>
            <Router-link to="/history" class="hover:text-red-400 ease-in duration-200"><font-awesome-icon icon="fa-solid fa-user-astronaut" /> Account</Router-link>
        </nav>
    </header>

</template>