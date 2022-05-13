<template>
  <b-header></b-header>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/store">Store</router-link>
  </nav>
  <sidebar-menu :menu="menu" />
  <div class="container">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <router-view />
      </div>
      <div class="col-3"></div>
    </div>
  </div>
  <b-footer>
    <hr>@XIN
  </b-footer>
</template>

<style lang="scss">
.router-link-active{
  background-color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
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
import { SidebarMenu } from "vue-sidebar-menu";
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
export default defineComponent({
  components: {
    SidebarMenu,
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
