<template>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <b-form @submit="login">
                <b-form-group label="E-mail">
                    <b-form-input v-model="email" placeholder="Enter your email"></b-form-input>
                </b-form-group>
                <b-form-group label="password">
                    <b-form-input type="password" v-model="password" placeholder="Enter your password"></b-form-input>
                </b-form-group>
                <b-button variant="primary" type="submit">Log In</b-button>
            </b-form>
        </div>
        <div class="col-3"></div>
        <div v-if="aa">{{ aa }}</div>
        <div v-else>{{ password }}</div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({

    methods: {
        login() {
            console.log(this.email + this.password)
        }
    },

    data() {
        return {
            email: "",
            password: "",
        }
    },
    computed: {
        aa(): boolean {
            console.log(111)
            if (this.password.length < 3)
                return true
            else
                return false
        }
    },
})
</script>