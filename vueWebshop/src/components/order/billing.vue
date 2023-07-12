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
            cardHolder: this.info.cardHolder,
            cardNumber: this.info.cardNumber,
            expDate: this.info.expDate,
            CVV: this.info.CVV
        }
    }
}
</script>


<template>
    <div class="flex flex-col gap-5 mt-5">
        <h2 class="font-bold text-xl">Billing Details</h2>
        <div class="flex gap-3">
            <label for="cardHolder">CardHolder:</label>
            <input type="text" id="cardHolder" name="cardHolder" v-model="cardHolder" class="border" placeholder="ex: john doe">
        </div>
        <div class="flex gap-3">
            <label for="CardNumber">cardNumber:</label>
            <input type="number" id="cardNumber" name="cardNumber" v-model="cardNumber" class="border" placeholder="ex: 1234 1234 1234 1234">
        </div>
        <div class="flex gap-3">
            <label for="expDate">Expire date:</label>
            <input type="text" id="expDate" name="expDate" v-model="expDate" class="border" placeholder="ex: 23/05">
        </div>
        <div class="flex gap-3">
            <label for="CVV">CVV/CVN:</label>
            <input type="text" id="CVV" name="CVV" v-model="CVV" class="border" placeholder="ex: Amsterdam">
        </div>
    </div>

    <div class="w-full flex justify-between">
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="$emit('goBack', 1, 0)">Back</button>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="$emit('billing', 3, cardHolder, cardNumber, expDate, CVV)">Next</button>
    </div>

</template>