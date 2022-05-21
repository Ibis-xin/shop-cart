import { Module } from "vuex";
import axios from "axios";
import Auth from "@/model/login/auth";
import Token from "@/model/login/token";

interface LoginState {
  token: string;
}

export const login: Module<LoginState, any> = {
  state: { token: "" },
  getters: {
    getToken: (state) => state.token,
  },
  mutations: {
    UPDATE_LOGIN({ token }, payload: string) {
      token = payload;
    },
  },
  actions: {
    async postLogin({ commit }, payload: Auth) {
      await axios
        .post(
          "/api/Login",
          {
            expireMinutes: 43200,
          },
          {
            auth: payload,
          }
        )
        .then((response) => {
          commit("UPDATE_LOGIN", (response.data as Token).token);
        });
    },
  },
};
