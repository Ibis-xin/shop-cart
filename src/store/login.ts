import { Module } from "vuex";
import axios from "axios";

interface LoginState {
  token: string;
}

interface LoginResponse {
  token: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export const login: Module<LoginState, any> = {
  state: { token: "" },
  getters: {
    getToken: (state) => state.token,
  },
  mutations: {
    UPDATE_LOGIN(state, payload: LoginResponse) {
      state.token = payload.token;
    },
  },
  actions: {
    async postLogin({ commit }, payload: LoginPayload) {
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
            console.log("1234")
          commit("UPDATE_LOGIN", response.data as LoginResponse);
        });
    },
  },
};
