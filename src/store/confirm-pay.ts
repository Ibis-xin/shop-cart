import axios from "axios";
import PayContent from "@/model/pay/pay-content";
import PayResponse from "@/model/pay/pay-response";
import { Module } from "vuex";

interface PayState {
  payContent: PayResponse;
}

export const confirmPay: Module<PayState, any> = {
  state: {
    payContent: new PayResponse(),
  },

  getters: {
    getterPay: ({ payContent }) => payContent,
  },

  mutations: {
    UPDATE_PAY({ payContent }, payload: PayResponse) {
       payContent.account = payload.account;
       payContent.deadline = payload.deadline;
       payContent.consumerDetails = payload.consumerDetails
    },
  },

  actions: {
    async confirmPay({ commit, getters }, payload: PayContent) {

      await axios
        .post("/api/Member/Payment", payload, {
          headers: {
            // Bearer 跟 token 中間有一個空格
            Authorization: `Bearer ${getters.getToken}`,
          },
        })
        .then((response) => {
          commit("UPDATE_PAY", response.data as PayResponse);
        });
    },
  },
};
