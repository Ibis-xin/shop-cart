<template>
        <b-card>
        <div>images: {{ images }}</div>
        <div>name: {{ name }}</div>
        <div>price: {{ price }}</div>
        <div>amount: {{ amount }}</div>
        <b-button variant="danger">remove from cart</b-button>
        </b-card>
        <br>
</template>

<script lang="ts">
import { defineComponent ,PropType} from "vue";

export default defineComponent({
    name: "CheckoutCard",
    props: {
        name: {
            type: Object as PropType<string>,
            required: true
        },
         price: {
            type: Object as PropType<number>,
            required: true
        },
         amount: {
            type: Object as PropType<number>,
            required: true
        }, 
        images: {
            type: Object as PropType<string>,
            required: true
        },
    },

})
</script>