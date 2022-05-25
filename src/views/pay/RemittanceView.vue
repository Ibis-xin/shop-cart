<template>
    <div>
        {{ getterPay }}
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, useStore } from "vuex";

export default defineComponent({
    setup() {
        const store = useStore();
        return { store };
    },
    computed: {
        ...mapGetters(["getterPay"]),
    },
});

</script>
<style lang="scss">
</style>