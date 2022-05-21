<template>
    <b-card :img-src="`data:image/jpg;base64,${cartvalue.image}`" img-alt="Image" img-top img-height="200" tag="article"
        style="max-width: 20rem">
        <div>name: {{ cartvalue.name }}</div>
        <div>price: {{ cartvalue.price }}</div>
        <div>amount: {{ cartvalue.amount }}</div>
        <b-button variant="danger" @click="removeCartCommodity(cartvalue.id)">remove from cart</b-button>
    </b-card>
    <br>
</template>

<script lang="ts">
import CartCommodity from "@/model/cart/cart-commodity";
import { defineComponent, PropType } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
    name: "CheckoutCard",
    props: {
        cartvalue: {
            type: Object as PropType<CartCommodity>,
            required: true,
        },
    },
    methods: {
        ...mapActions(["removeCartCommodity"])
    }

})
</script>