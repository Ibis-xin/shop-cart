<template>
    <b-row class="justify-content-md-center">
        <checkout-card v-for="i in getterCart" :key="i.id" :cartvalue="i" />
        <font size="6">Total ${{ total }}</font><br><br>
        <b-button size="lg" @click="pay()">pay</b-button>
    </b-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CheckoutCard from "@/components/CheckoutCard.vue";
import { mapGetters, useStore } from "vuex";
import { useRouter } from "vue-router";
import CartCommodity from "@/model/cart/cart-commodity";

export default defineComponent({

    name: 'CartView',

    setup() {
        const store = useStore();
        const router = useRouter();
        return { store, router };
    },

    components: {
        CheckoutCard,
    },

    methods: {
        pay() {
            this.router.push({ name: 'pay' })
        },
    },

    computed: {
        ...mapGetters(["getterCart"]),//顯示加入購物車的內容

        total() {
            let result = 0
            this.getterCart.forEach((e: CartCommodity) => {
                result += e.amount * e.price
            })
            return result
        },
    },
})
</script>