<template>
    <div>
        此頁面不存在，{{ time }} 秒後將回到首頁
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    created() {
        this.time = this.timeout
        this.setClock()
        setTimeout(() => { this.$router.push('/') }, this.timeout * 1000);
    },
    methods: {
        setClock() {
            for (let s = 1; s <= this.timeout; s++) {
                setTimeout(() => {
                    this.time--
                }, s * 1000);
            }
        }
    },
    data() {
        return {
            timeout:5,
            time: 0,
        }
    },
})
</script>