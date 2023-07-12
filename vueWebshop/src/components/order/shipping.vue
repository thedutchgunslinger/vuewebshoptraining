<script>
export default {
    props: {
      info: {
        type: Object,
        required: true
      }
    },
    data() {
        return {
            name: this.info.name,
            email: this.info.email,
            address: this.info.address,
            city: this.info.city,
            country: this.info.country,
        }
    }
}
</script>


<template>
    <div class="flex flex-col gap-5 mt-5">
        <h2 class="font-bold text-xl">Shipping Details</h2>
        <div class="flex gap-3">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" v-model="name" class="border" placeholder="ex: john doe">
        </div>
        <div class="flex gap-3">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" v-model="email" class="border" placeholder="ex: john@doe.com">
        </div>
        <div class="flex gap-3">
            <label for="address">Address:</label>
            <input type="text" id="address" name="address" v-model="address" class="border" placeholder="ex: johnStreet 15">
        </div>
        <div class="flex gap-3">
            <label for="city">City:</label>
            <input type="text" id="city" name="city" v-model="city" class="border" placeholder="ex: Amsterdam">
        </div>
        <div class="flex gap-3">
            <label for="country">Country:</label>
            <input type="text" id="country" name="country" v-model="country" class="border" placeholder="ex: The Netherlands">
        </div>
    </div>

    <div class="w-full flex justify-end">
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="$emit('shipping', 2, name, email, address, city, country)">Next</button>
    </div>

</template>