import { createStore } from "vuex";
import { commodity } from "./commodity";
import { login } from "./login";
import { cartlist } from "./cartList";

export default createStore({
  modules: {
    Login: login,
    Commodity: commodity,
    Cartlist: cartlist,
  },
});
