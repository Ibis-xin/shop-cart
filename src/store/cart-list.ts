import Commodity from "@/model/commodity/commodity";
import { Module } from "vuex";
import CartCommodity from "../model/cart/cart-commodity";

interface CartState {
  cartCommodities: CartCommodity[];
}

export const cartList: Module<CartState, any> = {
  state: {
    cartCommodities: [],
  },

  getters: {
    getterCart: ({ cartCommodities }) => cartCommodities,
  },

  mutations: {
    UPDATE_CART(state, payload: CartCommodity) {
      state.cartCommodities.push(payload);
    },
  },

  actions: {
    addToCart({ commit }, payload: { commodity: Commodity; amount: number }) {
      commit(
        "UPDATE_CART",
        new CartCommodity(payload.commodity, payload.amount)
      );
    },
  },
};
