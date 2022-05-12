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
        <br>
        <b-button type="submit" @click="login()" variant="primary">login</b-button>
      </b-form>
    </div>
    <div class="col-3"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
interface LoginData {
  email: string;
  password: string;
}

export default defineComponent({
  methods: {
    login() {
      // console.log(this.loginData); //TODO 登入功能

      this.axios.post(
        "https://localhost:5001/api/Login",
        {
          "expireMinutes": 43200
        },
        {
          auth: {
            username: this.loginData.email,
            password: this.loginData.password
          }
        })
        .then((response) => {
          console.log(response.data)
        })

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
