import { AxiosError } from "axios";
import axios from "axios";
import { Module } from "vuex";

export class Error {
  constructor(
    public message: string = "",
    public status: string = "",
    public show: boolean = false
  ) {}
}

interface state {
  error: Error;
}
export const error: Module<state, any> = {
  state: {
    error: new Error(),
  },
  getters: { getterError: ({ error }) => error },
  mutations: {
    UPDATE_ERROR({ error }, payload: Error) {
      error.show = payload.show;
    },
  },
  actions: {
    closeError({ commit }) {
      commit("UPDATE_ERROR", new Error());
    },
  },
};