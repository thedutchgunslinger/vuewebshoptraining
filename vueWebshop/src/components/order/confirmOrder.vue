<script setup>
import Product from "../producten/product.vue";
</script>


<script>
export default {
  props: {
    shipping: {
      type: Object,
      required: true,
    },
    billing: {
      type: Object,
      required: true,
    },
    isOrderPlaced: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<template>
  <div class="flex flex-col gap-5 mt-5">
    <h2 class="font-bold text-xl">Order Summary</h2>
    <div>
      <h3>Shipping details</h3>
      <p>Name: {{ shipping.name }}</p>
      <p>Email: {{ shipping.email }}</p>
      <p>Address: {{ shipping.address }}</p>
      <p>City: {{ shipping.city }}</p>
      <p>ountry: {{ shipping.country }}</p>
    </div>
    <div>
      <h3>Billing details</h3>
      <p>CardHolder: {{ billing.cardHolder }}</p>
      <p>CardNumber: {{ billing.cardNumber }}</p>
      <p>Expire date: {{ billing.expDate }}</p>
      <p>CVV/CVN: {{ billing.CVV }}</p>
      
    </div>
    <div>
      <h3>order details</h3>
      <div class="grid grid-cols-4 gap-4">
        <div v-for="product in $store.state.cart">
          <Product :product="product" type="none" />
        </div>
      </div>
    </div>
  </div>
   <div class="w-full flex justify-between">
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="$emit('goBack', 2, 33.3)">Back</button>
        <div v-if="isOrderPlaced == false">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="$emit('confirm', 4)">Confirm Order</button>
        </div>
        <div v-else>
            <button class="bg-green-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed" disabled><font-awesome-icon icon="fa-solid fa-circle-notch" spin /></button>
        </div>
    </div>
</template>
