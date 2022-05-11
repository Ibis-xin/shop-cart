<template>
        <b-card>
        <div>images: {{ images }}</div>
        <div>name: {{ name }}</div>
        <div>price: {{ price }}</div>
        <div>comment: {{ comment }}</div>
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
         comment: {
            type: Object as PropType<string>,
            required: true
        }, 
        images: {
            type: Object as PropType<Array<string>>,
            required: true
        },
    },

})
</script>