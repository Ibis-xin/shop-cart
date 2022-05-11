<template>
    <commodity-card 
    v-for="i in array"
     :key="i.name" 
     :name="i.name"
     :price="i.price"
     :comment="i.comment"
     :images="i.images" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CommodityCard from "@/components/CommodityCard.vue";
export default defineComponent({

    name: 'StoreView',
    components: {
        CommodityCard,
    },
    data() {
        return {
            array: [
                {
                    name: "a",
                    price: 0,
                    comment: "",
                    images: [""]
                },
                {
                    name: "b",
                    price: 0,
                    comment: "",
                    images: [""]
                }],//TODO 串API
        }
    },

})
</script>