<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
      <b-form @submit="login">
        <b-input-group id="email">
          <b-input-group-text> E-mail </b-input-group-text>
          <b-form-input v-model="loginData.email" placeholder="example@email.com" required></b-form-input>
        </b-input-group>
        <br />
        <b-input-group id="password">
          <b-input-group-text> password </b-input-group-text>
          <b-form-input v-model="loginData.password" :type="passwordShow ? 'password' : 'text'"
            placeholder="Enter your password" required></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-secondary" @click="passwordShow = !passwordShow">
              <font-awesome-icon :icon="['fas', `eye${!passwordShow ? '-slash' : ''}`]" />
            </b-button>
          </b-input-group-append>
        </b-input-group>
        <br />
        <b-button type="submit" @click="login()" variant="primary">login</b-button>
      </b-form>
    </div>
    <div class="col-3"></div>
  </div>
</template>

<script lang="ts">
import { LoginPayload } from "@/store/login";
import { defineComponent } from "vue";
import { useStore } from "vuex";
interface LoginData {
  email: string;
  password: string;
}

export default defineComponent({
  setup() {
    const store = useStore();
    return { store };
  },
  methods: {
    async login() {
      let auth: LoginPayload = {
        username: this.loginData.email,
        password: this.loginData.password,
      };
      await this.store.dispatch("postLogin", auth);
    },
  },
  data(): {
    loginData: LoginData;
    passwordShow: boolean;
  } {
    return {
      loginData: {
        email: "",
        password: "",
      },
      passwordShow: true,
    };
  },
});
</script>
