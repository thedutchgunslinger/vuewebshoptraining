<script setup>
import axios from "axios";
</script>

<script>
export default {
  data() {
    return {
      orders: [],
    };
  },
  created() {
    axios
      .get("http://localhost:5004/orders")
      .then((response) => {
        this.orders = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<template>
  <div>
    <h2 class="font-bold text-4xl">Order history</h2>

    <div v-for="order in orders" :key="order.id">
      <h3 class="font-bold text-xl">Order id: {{ order.id }}</h3>
      <div class="flex justify-between">
        <div id="shipping">
          <p><b>Shipping</b></p>
          <p>Name: {{ order.shipping.name }}</p>
          <p>Mail: {{ order.shipping.email }}</p>
          <p>Address: {{ order.shipping.address }}</p>
          <p>City: {{ order.shipping.city }}</p>
          <p>Country: {{ order.shipping.country }}</p>
        </div>
        <div id="billing">
          <p><b>Billing</b></p>
          <p>Cardholder: {{ order.billing.cardHolder }}</p>
          <p>Card number: {{ order.billing.cardNumber }}</p>
          <p>Expiration date: {{ order.billing.expDate }}</p>
          <p>CVV: {{ order.billing.CVV }}</p>
        </div>
        <div id="products">
          <p><b>Products</b></p>
          <div v-for="product in order.products" :key="product.id">
            <p>Product name: {{ product.product_name }}</p>
            <p>Product price: {{ product.price }}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>
