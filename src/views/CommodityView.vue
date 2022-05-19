<template>
    <b-row class="justify-content-md-center">
        <b-card tag="article" class="mb-2">
            <b-card-img alt="Image" img-left img-wi="200" :src="`data:image/png;base64,${getterCommodity.images[0]}`">
            </b-card-img>
            <b-card-title style="text-align: left"> {{ getterCommodity.name }}</b-card-title>
            <b-card-sub-title style="text-align: right">{{
                    getterCommodity.price
            }}</b-card-sub-title>
            <b-input-group>
                <b-input-group-text>amount</b-input-group-text>
                <b-form-input type="number" min="0.00" v-model="amount"></b-form-input>
                <b-input-group-append>
                    <b-button variant="outline-secondary" @click="addToCart(getterCommodity, amount)">add</b-button>
                </b-input-group-append>
            </b-input-group>
        </b-card>
        <text style="text-align: left">{{ getterCommodity.comment }}</text>
    </b-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, useStore } from "vuex";
import { useRoute } from "vue-router";
import { CartCommodity } from "@/store/cartlist";

export default defineComponent({
    name: "CommodityView",

    setup() {
        const route = useRoute();
        const store = useStore();
        return { store, route };
    },

    async created() {
        console.log(this.route.params.name);
        await this.store.dispatch("getCommodityDetal", this.route.params.name);
    },

    computed: {
        ...mapGetters(["getterCommodity"]),
    },

    methods: {
        addToCart(commodity: CartCommodity, amount: number) {
            this.store.dispatch("addToCart", { commodity: commodity, amount: amount });
        },
    },

    data() { return { amount: 0 } },
});
</script>
