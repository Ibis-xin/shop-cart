import { Module } from "vuex";
import axios, { AxiosResponse } from "axios";
import Auth from "@/model/login/auth";
import Token from "@/model/login/token";

interface LoginState {
  token: string;
}

export const login: Module<LoginState, any> = {
  state: { token: "" },
  getters: {
    getToken: ({ token }) => token,
  },
  mutations: {
    UPDATE_LOGIN(state, payload: string) {
      state.token = payload;
      localStorage.setItem("token", payload);
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
        .then((response: AxiosResponse<Token, any>) => {
          commit("UPDATE_LOGIN", response.data.token);
        });
    },
    clearToken({ commit }) {
      commit("UPDATE_LOGIN", "");
    },
  },
};
