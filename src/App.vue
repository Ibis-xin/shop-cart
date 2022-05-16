<template>
  <b-header class="header">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/store">Store</router-link> |
  </b-header>

  <PushRotate>
    <router-link to="/login">Login</router-link>
    <router-link to="/account">Account</router-link>
    <router-link to="/cart">Cart</router-link>
  </PushRotate>

  <div id="page-wrap">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-6">
          <router-view />
        </div>
      </div>
    </div>
    <b-footer>
      <hr />
      @XIN
    </b-footer>
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
</style>

<script lang="ts">
import { defineComponent } from "vue";

// https://www.npmjs.com/package/vue3-burger-menu
import { PushRotate } from "vue3-burger-menu";
export default defineComponent({
  components: {
    PushRotate,
  },

  methods: {},

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
  computed: {},
});
</script>
