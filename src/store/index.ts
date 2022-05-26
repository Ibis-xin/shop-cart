import { createStore } from "vuex";
import { commodity } from "./commodity";
import { login } from "./login";
import { cartList } from "./cart-list";
import { confirmPay } from "./confirm-pay";
import { error } from "./error";

export default createStore({
  modules: {
    Login: login,
    Commodity: commodity,
    CartList: cartList,
    ConfirmPay: confirmPay,
    Error: error,
  },
});
