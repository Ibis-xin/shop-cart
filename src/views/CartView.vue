<template>
    <checkout-card v-for="i in array" :key="i.name" :name="i.name" :price="i.price" :comment="i.comment"
        :images="i.images" />
    <font size="6">Total ${{ total }}</font><br><br>
    <b-button size="lg" @click="pay()">pay</b-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CheckoutCard from "@/components/CheckoutCard.vue";
interface Data {
    array: {
        name: string;
        price: number;
        comment: string;
        images: Array<string>;
    }[];
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
    data(): Data {
        return {
            array: [
                {
                    name: "c",
                    price: 20,
                    comment: "",
                    images: [""]
                },
                {
                    name: "d",
                    price: 10,
                    comment: "",
                    images: [""]
                }],//TODO 串API
        }
    },

})
</script>