import { Module } from "vuex";
import axios from "axios";
import Commodity from "@/model/commodity/commodity";

interface CommodityState {
  commodities: Commodity[];
  commodity: Commodity;
}

export const commodity: Module<CommodityState, any> = {
  state: {
    commodities: [],
    commodity: new Commodity(),
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
    async getCommodityDetal({ commit }, id: string) {
      console.log(id);
      await axios.get("/api/Commodity/" + id).then((response) => {
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
