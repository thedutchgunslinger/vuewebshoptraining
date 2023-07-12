<script setup>
import axios from 'axios'
import Product from '../components/producten/product.vue'
</script>

<script>
export default {
    name: 'ProductsView',
    data() {
        return {
            products: []
        }
    },
    created() {
        axios.get('http://localhost:5004/products')
            .then((response) => {
                console.log(response.data)
                this.products = response.data
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
</script>



<template>
    <h1>Products</h1>
    <div class="grid grid-cols-4 gap-4">
        <div v-for="product in products" :key="product.id" class="product">
            <div v-if="product.is_available">
                <Product :product="product" />  
            </div>
        </div>
    </div>
</template>

<style scoped>
.product:empty {
    display: none;
}
</style>