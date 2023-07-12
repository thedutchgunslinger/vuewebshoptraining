<script setup>
import { RouterLink } from 'vue-router'
</script>

<script>
    export default {
        name: 'Product',
        props: {
            product: {
                type: Object,
                required: true
            },
            type: {
                type: String,
                default: 'product'
            }
        },
        methods: {
            deleteProduct() {
                this.$store.commit('removeFromCart', this.product)
            }
        }
    }
</script>

<template>
    <div class="bg-slate-500 p-2 pb-7">
        <img :src="product.image_url">
        <h2 class="font-bold text-lg">{{ product.product_name }}</h2>
        <p class="text-slate-800"><font-awesome-icon icon="fa-solid fa-tag" /> {{ product.category }}</p>
        <p class="mb-6">€ {{ product.price }}</p>
        <div v-if="type == 'cart'">
            <button @click="deleteProduct" class="hover:text-red-400 ease-in duration-200 p-5 bg-red-400 rounded hover:bg-slate-500 border-2 border-red-400">delete from cart</button>
        </div>
        <div v-else-if="type == 'product'">
            <Router-link :to="'/product/' + product.id" class="hover:text-red-400 ease-in duration-200 p-5 bg-red-400 rounded hover:bg-slate-500 border-2 border-red-400"> see product</Router-link>
        </div>
        <div v-else>
id
        </div>
    </div>
</template>