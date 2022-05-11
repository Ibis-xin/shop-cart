<template>
    <b-card>
        <b-row>
            <b-col>
                <div>images: {{ images }}</div>
                <div>name: {{ name }}</div>
                <div>price: {{ price }}</div>
                <div>comment: {{ comment }}</div>
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="3"></b-col>
            <b-col sm="6">
                <b-input-group>
                    <b-input-group-text>amount</b-input-group-text>
                    <b-form-input type="number" min="0.00"></b-form-input>
                    <b-input-group-append>
                        <b-button variant="outline-secondary">add</b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-col>
            <b-col sm="3"></b-col>
        </b-row>
    </b-card>
    <br>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
    name: "CommodityCard",
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