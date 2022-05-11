<template>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <b-form @submit="login">
                <b-input-group id="email">
                    <b-input-group-text> E-mail </b-input-group-text>
                    <b-form-input v-model="email" placeholder="example@email.com" required></b-form-input>
                </b-input-group>
                <br>
                <b-input-group id="password">
                    <b-input-group-text> password </b-input-group-text>
                    <b-form-input v-model="password" :type="passwordShow ? 'password' : 'text'"
                        placeholder="Enter your password" required></b-form-input>
                    <b-input-group-append>
                        <b-button variant="outline-secondary" @click="passwordShow = !passwordShow">
                            <font-awesome-icon :icon="['fas', `eye${!passwordShow ?'-slash': ''}`]" />
                        </b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-form>
        </div>
        <div class="col-3"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    methods: {
        login() {
            console.log(this.email + this.password);//TODO 登入功能
        }
    },
    data() {
        return {
            email: "",
            password: "",
            passwordShow: true,
        };
    },
});
</script>