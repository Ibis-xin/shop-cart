<template>
    <b-card-group columns>
        <commodity-card v-for="i in array" :key="i.name" :name="i.name" :price="i.price" :comment="i.comment"
            :images="i.images" />
    </b-card-group>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CommodityCard from "@/components/CommodityCard.vue";

interface CommodityData {
    name: string;
    price: number;
    comment: string;
    images: string[];
}

export default defineComponent({

    name: 'StoreView',

    components: {
        CommodityCard,
    },

    async created() {
        try {
            let res = await this.axios.get(
                "https://localhost:5001/api/Commodity/Commodities",
                {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMiLCJqdGkiOiI3YTc0ODdlNC0wNDYwLTRjYzctYjc2Zi1hOTVjZjcxYWU1MjIiLCJyb2xlcyI6WyJBZG1pbiIsIlVzZXJzIl0sIm5iZiI6MTY1MjMzNTM1MSwiZXhwIjoxNjUyNDIxNzUxLCJpYXQiOjE2NTIzMzUzNTEsImlzcyI6Ikp3dEF1dGhEZW1vIn0.et8fuip24Vj5ZF9G20vr6lTpdlkFX8GDsG_v_nqQltU` // Bearer 跟 token 中間有一個空格
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
                    comment: "",
                    images: [""]
                },
            ],//TODO 串API
        }
    },
})
</script>