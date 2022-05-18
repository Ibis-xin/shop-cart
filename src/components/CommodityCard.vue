<template>
    <b-card :img-src="`data:image/png;base64,${value.images[0]}`" img-alt="Image" img-top img-height="200" tag="article"
        style="max-width: 20rem">
        <b-card-sub-title style="text-align:right;">${{ value.price }}</b-card-sub-title>
        <b-button>123</b-button>
        <b-card-text class="text-muted" style="text-align:right;">{{ value.star }}
        </b-card-text>
    </b-card>
</template>

<script lang="ts">
import { Commodity } from "@/store/commodity";
import { defineComponent, PropType } from "vue";

export default defineComponent({
    name: "CommodityCard",
    props: {
        value: {
            type: Object as PropType<Commodity>,
            required: true,
        }
    },
});
</script>
