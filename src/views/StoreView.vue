<template>
    <b-card-group columns>
        <commodity-card @click="toCommodity(i.name)" v-for="i in getterCommodities" :key="i.name" :value="i" />
    </b-card-group>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CommodityCard from "@/components/CommodityCard.vue";
import { mapGetters, useStore } from "vuex";

export default defineComponent({
    name: "StoreView",

    setup() {
        const store = useStore();
        return { store };
    },
    components: {
        CommodityCard,
    },

    methods: {
        toCommodity(name: string) {
            this.$router.push({ path: '/commodity/' + name })
        },
    },

    async created() {
        await this.store.dispatch("getCommodities");
    },
    computed: {
        ...mapGetters(["getterCommodities"]),
    },
});
</script>
