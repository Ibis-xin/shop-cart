<template>
    <checkout-card v-for="i in array" :key="i.name" :name="i.name" :price="i.price" :amount="i.amount"
        :images="i.images" />
    <font size="6">Total ${{ total }}</font><br><br>
    <b-button size="lg" @click="pay()">pay</b-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CheckoutCard from "@/components/CheckoutCard.vue";
interface BuyData {
    images: string;
    name: string;
    price: number;
    amount: number;
}

export default defineComponent({

    name: 'CartView',
    components: {
        CheckoutCard,
    },
    methods: {
        pay() {
            this.$router.push({ name: 'pay' })
        },
    },
    computed: {
        total() {
            let result = 0
            this.array.forEach(e => {
                result = result + e.price
            })
            return result
        },

    },
    data(): {
        array: BuyData[];
    } {
        return {
            array: [
                {
                    images: "",
                    name: "c",
                    price: 20,
                    amount: 0,
                },
                {
                    images: "",
                    name: "d",
                    price: 10,
                    amount: 0,
                }],//TODO 串API
        }
    },

})
</script>