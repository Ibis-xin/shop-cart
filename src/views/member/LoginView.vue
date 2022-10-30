<template>
  <div class="row justify-content-md-center">
    <div class="col-md-6">
      <b-form
        id="login-form"
        @submit="login(loginData.username, loginData.password)"
      >
        <b-input-group id="email">
          <b-input-group-text> E-mail </b-input-group-text>
          <b-form-input 
            v-model="loginData.username"
            placeholder="example@email.com"
            required
          />
        </b-input-group>
        <br />
        <b-input-group id="password">
          <b-input-group-text> password </b-input-group-text>
          <b-form-input
            v-model="loginData.password"
            :type="passwordShow ? 'password' : 'text'"
            placeholder="Enter your password"
            required
          />
          <b-input-group-append>
            <b-button
              variant="outline-secondary"
              @click="passwordShow = !passwordShow"
            >
              <font-awesome-icon
                :icon="['fas', `eye${!passwordShow ? '-slash' : ''}`]"
              />
            </b-button>
          </b-input-group-append>
        </b-input-group>
        <br />
        <b-button type="submit" variant="primary"> login </b-button>
      </b-form>
    </div>
  </div>
</template>

<script lang="ts">
import Auth from "@/model/login/auth";
import router from "@/router";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    return { store };
  },
  data(): {
    flag: string;
    loginData: Auth;
    passwordShow: boolean;
  } {
    return {
      flag: "",
      loginData: {
        username: "",
        password: "",
      },
      passwordShow: true,
    };
  },

  methods: {
    regTest(username: string){
      const regex = new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/); // eslint-disable-line
      return regex.test(username)
    },
    async login(username: string, password: string) {
      if (this.regTest(this.loginData.username)) {
        let auth: Auth = {
          username,
          password,
        };

        await this.store.dispatch("postLogin", auth);
        console.log(222);
        router.push("account");
      } else {
        this.flag = "fff";
        console.log(111);
        alert("false");
      }
    },
  },
});
</script>
