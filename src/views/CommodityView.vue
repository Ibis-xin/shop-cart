<template>
    <div>
        {{ getterCommodity }}
        <!-- <commodity-detal v-for="i in getterCommodities" :key="i.name" :value="i" /> -->
        <!-- <router-link :to="`/commodity/${i}`"> /commodity/{{ i }} </router-link> -->
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CommodityDetal from "@/components/CommodityDetal.vue";
import { mapGetters, useStore } from "vuex";
import { useRoute } from "vue-router";

export default defineComponent({
    name: "CommodityView",

    setup() {
        const route = useRoute()
        const store = useStore()
        return { store, route }
    },

    // components: { CommodityDetal, },

    async created() {
        console.log(this.route.params.name)
        await this.store.dispatch("getCommodityDetal", this.route.params.name)
    },
    computed: {
        ...mapGetters(["getterCommodity"]),
    },
});
</script>
