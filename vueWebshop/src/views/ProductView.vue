<script setup>
import axios from "axios";
import { RouterLink } from "vue-router";
</script>

<script>
export default {
  name: "ProductView",
  data() {
    return {
      product: [],
    };
  },
  created() {
    axios
      .get(`http://localhost:5004/products?id=${this.$route.params.id}`)
      .then((response) => {
        console.log(response.data);
        this.product = response.data[0];
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
  },
};
</script>

<template>
    <div>

  <router-link to="/products" class="hover:text-red-400 ease-in duration-200"
    >← back to products</router-link
  >
  <div class="grid grid-cols-2 mt-5">
    <img :src="product.image_url" alt="" />
    <div class="flex justify-between flex-col">
      <div>
        <h2 class="font-bold text-2xl">{{ product.product_name }}</h2>
        <p>
          <font-awesome-icon icon="fa-solid fa-tag" /> Category:
          {{ product.category }}
        </p>
        <p class="mb-3">
          <font-awesome-icon icon="fa-solid fa-building" /> Brand:
          {{ product.brand }}
        </p>
        <p class="mb-3">{{ product.description }}</p>
        <p>Quantity: {{ product.quantity }} left</p>
        <p>€ {{ product.price }}</p>
        <p>
          <font-awesome-icon icon="fa-solid fa-calendar-days" /> Release date:
          {{ product.release_date }}
        </p>
      </div>

      <div v-if="product.quantity > 0" >
        <button
        class="p-5 w-full bg-red-400 rounded hover:bg-white border-2 border-red-400 disabled:opacity-50 disabled:cursor-not-allowed"
        @click="addToCart"
        >
        add to cart
      </button>
      </div>
      <div v-else>
         <button
        class="p-5 w-full bg-red-400 rounded border-2 border-red-400 disabled:opacity-50 disabled:cursor-not-allowed" disabled
      >
        Sold out
      </button>
      </div>
     
    </div>
  </div>
 </div>

</template>
