<template>
    <b-card tag="article" class="mb-2" style="max-width: 20rem">
        <b-card-img img-alt="Image" img-left img-wi="200">{{ "`data:image/png;base64,${images[0]}`" }}</b-card-img>
        <b-card-title style="text-align:left;"> {{ value.name }}</b-card-title>
        <b-card-sub-title style="text-align:right;">{{ value.price }}</b-card-sub-title>
        <b-input-group>
            <b-input-group-text>amount</b-input-group-text>
            <b-form-input type="number" min="0.00"></b-form-input>
            <b-input-group-append>
                <b-button variant="outline-secondary">add</b-button>
            </b-input-group-append>
        </b-input-group>
    </b-card>
    <text style="text-align:left;">{{ value.comment }}</text>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
    name: "CommodityDetal",
    props: {
        value: {
            type: Object as PropType<{
                name: string,
                price: number,
                star: number,
                comment: string,
                images: Array<string>,
            }>,
            required: true,
        },
    },
});
</script>