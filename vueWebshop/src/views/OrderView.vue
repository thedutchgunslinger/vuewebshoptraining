<!-- shipping details -->
<!-- billing details -->
<!-- place order -->
<script setup>
import ProgressBar from "../components/order/progressBar.vue";
import Shipping from "../components/order/shipping.vue";
import Billing from "../components/order/billing.vue";
import ConfirmOrder from "../components/order/confirmOrder.vue";
import OrderPlaced from "../components/order/orderPlaced.vue";

import axios from "axios";
</script>

<script>
export default {
  data() {
    return {
      range: 0,
      page: 1,
      shipping: {
        name: "",
        email: "",
        address: "",
        city: "",
        country: "",
      },
      billing: {
        cardHolder: "",
        cardNumber: "",
        expDate: "",
        CVV: "",
      },
      isOrderPlaced: false,
    };
  },
  methods: {
    handleShipping(page, name, email, address, city, country) {
      this.page = page;
      this.range = 33.3;
      this.shipping.name = name;
      this.shipping.email = email;
      this.shipping.address = address;
      this.shipping.city = city;
      this.shipping.country = country;
    },
    handleBilling(page, cardHolder, cardNumber, expDate, CVV) {
      this.page = page;
      this.range = 66.6;
      this.billing.cardHolder = cardHolder;
      this.billing.cardNumber = cardNumber;
      this.billing.expDate = expDate;
      this.billing.CVV = CVV;
    },
    handleConfirm(page) {
      this.isOrderPlaced = true;
      const order = {
        shipping: this.shipping,
        billing: this.billing,
        products: this.$store.state.cart,
      };

      axios.post("http://localhost:5004/orders", order).then((res) => {
        res.data.products.forEach((product) => {
          axios
            .patch(`http://localhost:5004/products/${product.id}`, {
              quantity: product.quantity - 1,
            })
            .then((res) => {
              console.log(res.data);
            });
        });
        this.page = page;
        this.range = 100;
        this.$store.commit("clearCart");
      });
    },
    handleBack(page, range) {
      this.page = page;
      this.range = range;
    },
  },
};
</script>

<template>
  <div>
    <h1>order</h1>
    <ProgressBar :step="range" />
    <div v-if="page == 1">
      <Shipping @shipping="handleShipping" :info="shipping" />
    </div>
    <div v-else-if="page == 2">
      <Billing @billing="handleBilling" @goBack="handleBack" :info="billing" />
    </div>
    <div v-else-if="page == 3">
      <ConfirmOrder
        :shipping="shipping"
        :billing="billing"
        @goBack="handleBack"
        @confirm="handleConfirm"
        :isOrderPlaced="isOrderPlaced"
      />
    </div>
    <div v-else>
      <OrderPlaced />
    </div>
  </div>
</template>
