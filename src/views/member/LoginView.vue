<template>
  <div class="row justify-content-md-center">
    <div class="col-md-6">
      <b-form @submit="login">
        <b-input-group id="email">
          <b-input-group-text> E-mail </b-input-group-text>
          <b-form-input
            v-model="loginData.username"
            placeholder="example@email.com"
            required
          ></b-form-input>
        </b-input-group>
        <br />
        <b-input-group id="password">
          <b-input-group-text> password </b-input-group-text>
          <b-form-input
            v-model="loginData.password"
            :type="passwordShow ? 'password' : 'text'"
            placeholder="Enter your password"
            required
          ></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-secondary" @click="passwordShow = !passwordShow">
              <font-awesome-icon :icon="['fas', `eye${!passwordShow ? '-slash' : ''}`]" />
            </b-button>
          </b-input-group-append>
        </b-input-group>
        <br />
        <b-button type="submit" variant="primary">login</b-button>
      </b-form>
    </div>
  </div>
</template>

<script lang="ts">
import Auth from "@/model/login/auth";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    return { store };
  },

  methods: {
    async login() {
      const regex = new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/) // eslint-disable-line
      if (regex.test(this.loginData.username)) {
        alert("true");
      } else {
        alert("false");
      }
      let auth: Auth = {
        username: this.loginData.username,
        password: this.loginData.password,
      };
      await this.store.dispatch("postLogin", auth);
    },
  },
  data(): {
    loginData: Auth;
    passwordShow: boolean;
  } {
    return {
      loginData: {
        username: "",
        password: "",
      },
      passwordShow: true,
    };
  },
});
</script>