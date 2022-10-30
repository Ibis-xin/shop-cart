<template>
    <b-card-group columns id="goods">
        <commodity-card @click="toCommodity(i.id)" v-for="i in getterCommodities" :key="i.id" :value="i" />
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
        toCommodity(id: number) {
            this.$router.push({ path: '/commodity/' + id })
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
