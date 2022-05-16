import { commodity } from './commodity';
import { createStore } from "vuex";
import { login } from "./login";

export default createStore({
  modules: {
    Login: login,
    Commodity: commodity,
  },
});
