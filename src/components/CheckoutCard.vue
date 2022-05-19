<template>
    <b-card :img-src="`data:image/jpg;base64,${cartvalue.images}`" img-alt="Image" img-top img-height="200" tag="article"
        style="max-width: 20rem">
        <div>name: {{ cartvalue.name }}</div>
        <div>price: {{ cartvalue.price }}</div>
        <div>amount: {{ cartvalue.amount }}</div>
        <b-button variant="danger">remove from cart</b-button>
    </b-card>
    <br>
</template>

<script lang="ts">
import { CartCommodity } from "@/store/cart-list";
import { defineComponent, PropType } from "vue";

export default defineComponent({
    name: "CheckoutCard",
    props: {
        cartvalue: {
            type: Object as PropType<CartCommodity>,
            required: true,
        },
    },

})
</script>