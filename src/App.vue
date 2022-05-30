<template>
  <header class="header">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/store">Store</router-link> |
  </header>
  <PushRotate>
    <router-link v-if="getToken == ''" to="/login">Login</router-link>
    <b-button v-else @click="clearToken()">Logout</b-button>
    <router-link to="/account">Account</router-link>
    <router-link to="/cart">Cart</router-link>
  </PushRotate>
  <div id="page-wrap">
    <div class="container">
      <div class="row justify-content-md-center" id="content-wrap">
        <div class="col-md-6">
          <div v-if="getterError.show">
            <ErrorPage />
          </div>
          <router-view />
        </div>
      </div>

      <div>---{{ store.getters.getToken }}</div>
      <footer class="footer">
        <hr>
        @XIN
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 2.5rem;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

// https://www.npmjs.com/package/vue3-burger-menu
import { PushRotate } from "vue3-burger-menu";
import { mapActions, mapGetters, useStore } from "vuex";
import ErrorPage from "./components/ErrorPage.vue";

export default defineComponent({
  setup() {
    const store = useStore()
    return { store }
  },

  components: {
    PushRotate,
    ErrorPage,
  },

  computed: {
    ...mapGetters(["getterError", "getToken"]),
  },

  methods: {
    ...mapActions(["clearToken"]),
  },

  data(): { menu: any[] } {
    return {
      menu: [
        {
          header: "Main Navigation",
          hiddenOnCollapse: true,
        },
        {
          href: "/login",
          title: "Login",
          icon: "fa fa-user",
        },
        {
          href: "/cart",
          title: "Carts",
          icon: "fa fa-chart-area",
        },
      ],
    };
  },
});
</script>
