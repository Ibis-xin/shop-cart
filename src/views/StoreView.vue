<template>
    <b-card-group columns>
        <commodity-card v-for="i in array" :key="i.name" :value="i" />
    </b-card-group>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CommodityCard from "@/components/CommodityCard.vue";

interface CommodityData {
    name: string;
    price: number;
    star: number;
    comment: string;
    images: string[];
}

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMiLCJqdGkiOiIwMTdjN2RjZi1lNThhLTRjYzktODMzYS02OGM4NTFjZGFlZjYiLCJyb2xlcyI6WyJBZG1pbiIsIlVzZXJzIl0sIm5iZiI6MTY1MjQyMzM0MywiZXhwIjoxNjUyNTA5NzQzLCJpYXQiOjE2NTI0MjMzNDMsImlzcyI6Ikp3dEF1dGhEZW1vIn0.URkgbwk3u0Ch-7EWH-ZeTq5xTzqmaJ2qrRJBUc8jHcE`;
export default defineComponent({

    name: 'StoreView',

    components: {
        CommodityCard,
    },

    async created() {
        try {
            let res = await this.axios.get(
                "/api/Commodity/Commodities",
                {
                    headers: {
                        // Bearer 跟 token 中間有一個空格
                        Authorization: `Bearer ${token}`
                    }
                })
            this.array = res.data as CommodityData[]
        }
        catch (e: any) {
            console.log(e.data)
        }
    },

    data(): {
        array: CommodityData[];
    } {
        return {
            array: [
                {
                    name: "",
                    price: 0,
                    star: 0,
                    comment: "",
                    images: [""]
                },
            ],//TODO 串API
        }
    },
})
</script>