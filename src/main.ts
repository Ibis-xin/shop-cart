import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// https://www.npmjs.com/package/vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// https://cdmoro.github.io/bootstrap-vue-3/
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "@/plugins/font-awesome";

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(VueAxios, axios)
.use(BootstrapVue3)
.use(store)
.use(router)
.mount("#app");