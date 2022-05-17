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
  commodity: Commodity;
}

export const commodity: Module<CommodityState, any> = {
  state: {
    commodities: [],
    commodity: { name: "", price: 0, comment: "", star: 0, images: [] },
  },
  getters: {
    getterCommodity: ({ commodity }) => commodity,
    getterCommodities: ({ commodities }) => commodities,
  },
  mutations: {
    UPDATE_COMMODITY(state, payload: Commodity) {
      state.commodity = payload;
    },
    UPDATE_COMMODITIES(state, payload: Commodity[]) {
      state.commodities = payload;
    },
  },
  actions: {
    async getCommodityDetal({ commit }, name: string) {
      console.log(name)
      await axios.get("/api/Commodity/" + name).then((response) => {
        commit("UPDATE_COMMODITY", response.data as Commodity);
      });
    },
    async getCommodities({ commit }) {
      await axios
        .get(
          "/api/Commodity/Commodities"
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
