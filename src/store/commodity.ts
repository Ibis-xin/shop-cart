import { Module } from "vuex";
import axios,{AxiosResponse,AxiosError} from "axios";
import Commodity from "@/model/commodity/commodity";
import { Error } from "./error";

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
        .then((response:AxiosResponse<Commodity[],any>) => {
          commit("UPDATE_COMMODITIES", response.data);
        })
        .catch((e:AxiosError)=>{
          console.log(e.code)
          commit("UPDATE_ERROR",new Error(e.message,e.status,true))
        });
    },
  },
};
