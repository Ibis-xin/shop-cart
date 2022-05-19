import { Commodity } from "./commodity";
import { Module } from "vuex";

export interface CartCommodity {
  id: string;
  name: string;
  price: number;
  comment: string;
  amount: number;
  star: number;
  images: string;
}

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
      console.log(payload);
      const data: CartCommodity = {
        id: payload.commodity.id,
        name: payload.commodity.name,
        price: payload.commodity.price,
        comment: payload.commodity.comment,
        amount: payload.amount,
        star: payload.commodity.star,
        images: payload.commodity.images[0],
      };
      commit("UPDATE_CART", data);
    },
  },
};
