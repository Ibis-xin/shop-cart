<template>
    <b-card :img-src="`data:image/png;base64,${images[0]}`" img-alt="Image" img-top img-height="200" tag="article"
        class="mb-2" style="max-width: 20rem">
        <b-card-title style="text-align:left;"> {{ name }}</b-card-title>
        <b-card-sub-title style="text-align:right;">${{ price }}</b-card-sub-title>
        <b-card-text style="text-align:left;">{{ comment }}</b-card-text>
        <template #footer>
            <small class="text-muted" style="text-align:right;">☆★★★★（4.9/5）</small>
        </template>
    </b-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
    name: "CommodityCard",
    props: {
        name: {
            type: Object as PropType<string>,
            required: true,
        },
        price: {
            type: Object as PropType<number>,
            required: true,
        },
        comment: {
            type: Object as PropType<string>,
            required: true,
        },
        images: {
            type: Object as PropType<Array<string>>,
            required: true,
        },
    },
});
</script>
