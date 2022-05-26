<template>
    <div class="page404 bg_half_pink">
        <div class="W100"></div>
        <button @click="closeError()">X</button>
        <h3 class="f24">找不到頁面</h3>
        <h6 class="f16 f_bold">oops 找不到此連結</h6><a href="/">首頁</a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, useStore } from "vuex";

export default defineComponent({
    setup() {
        const store = useStore();
        return { store }
    },
    methods: {
        ...mapActions(["closeError"])
    },
})
</script>