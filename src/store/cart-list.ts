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
    ADD_COMMODITY(state, payload: CartCommodity) {
      state.cartCommodities.push(payload);
    },
    ADD_AMOUNT_IN_INDEX(
      { cartCommodities },
      payload: { index: number; amount: number }
    ) {
      cartCommodities[payload.index].amount += payload.amount;
    },
    REMOVE_COMMODITY({ cartCommodities }, index: number) {
      cartCommodities.splice(index, 1);
    },
  },

  actions: {
    removeCartCommodity({ commit, getters }, id: string) {
      for (let i = 0; i < getters.getterCart.length; i++) {
        if (getters.getterCart[i].id == id) {
          commit("REMOVE_COMMODITY", i);
          break;
        }
      }
    },
    addCommodity(
      { commit, getters },
      payload: { commodity: Commodity; amount: number }
    ) {
      let addCart = true;

      for (let i = 0; i < getters.getterCart.length; i++) {
        if (payload.commodity.id == getters.getterCart[i].id) {
          commit("ADD_AMOUNT_IN_INDEX", { index: i, amount: payload.amount });
          addCart = false;
          break;
        }
      }

      if (addCart) {
        commit(
          "ADD_COMMODITY",
          new CartCommodity(payload.commodity, payload.amount)
        );
      }
    },
  },
};
