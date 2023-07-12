<script setup>
import Product from "../components/producten/product.vue";
import { RouterLink } from "vue-router";
</script>

<script>
export default {
    name: "CartView",
    computed: {
        cartTotal(){
            let total = 0;
            for (let product of this.$store.state.cart) {
                total += product.price;
            }
            return Math.floor(total * 100) / 100;
        }
    },
    }
</script>

<template>
<div>
  <h2>Shopping Cart</h2>
  <div v-if="$store.state.cart.length <= 0">
    <p>There are no products in your cart yet.</p>
    <p>you can add product to you cart <Router-link class="underline" to="/products">here</Router-link></p>
  </div>
  <div v-else>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="product in $store.state.cart">
        <Product :product="product" type="cart" />
      </div>
    </div>
    <button @click="$store.commit('clearCart')" class="hover:text-red-400 ease-in duration-200 p-5 bg-red-400 rounded hover:bg-slate-500 border-2 border-red-400">clear cart</button>
    <Router-link to="/order" class="hover:text-red-400 ease-in duration-200 p-5 bg-red-400 rounded hover:bg-slate-500 border-2 border-red-400">place order</Router-link>
    <p>Your total is: {{ cartTotal }}</p>
  </div>
</div>

        
 
</template>
