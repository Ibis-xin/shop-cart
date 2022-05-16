import { Module } from "vuex";
import axios from "axios";

export interface Commodity {
  name: string;
  price: number;
  comment: string;
  star: number;
  images: Array<string>;
}

interface CommodityState {
  commodities: Commodity[];
}

export const commodity: Module<CommodityState, any> = {
  state: {
    commodities: [],
  },
  getters: {
    getterCommodities: ({ commodities }) => commodities,
  },
  mutations: {
    UPDATE_COMMODITIES(state, payload: Commodity[]) {
      state.commodities = payload;
    },
  },
  actions: {
    async getCommodities({ commit, getters }) {
      await axios
        .get("/api/Commodity/Commodities", 
          // {
          //   headers: {
          //     // Bearer 跟 token 中間有一個空格
          //     Authorization: `Bearer ${getters.getToken}`,
          //   },
          // }
        )
        .then((response) => {
          commit("UPDATE_COMMODITIES", response.data);
        });
    },
  },
};
