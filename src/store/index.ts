import { createStore } from "vuex";
import { commodity } from "./commodity";
import { login } from "./login";
import { cartList } from "./cart-list";

export default createStore({
  modules: {
    Login: login,
    Commodity: commodity,
    CartList: cartList,
  },
});
