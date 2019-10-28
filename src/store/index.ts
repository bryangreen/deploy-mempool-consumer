import Vue from 'vue';
import Vuex from 'vuex';
import { IPendingTransaction } from '@/shared/IPendingTransaction'; // eslint-disable-line import/no-extraneous-dependencies

Vue.use(Vuex);

const pendingTxs: IPendingTransaction[] = [];

export default new Vuex.Store({
  state: {
    // we store messages as a dictionary for easier access and interaction
    // @see https://hackernoon.com/shape-your-redux-store-like-your-database-98faa4754fd5
    pendingTxs,
  },
  mutations: {
    NEW_PENDING_TX(state, message: IPendingTransaction) {
      state.pendingTxs.unshift(message);
    },
  },
  actions: {
    socket_message({ dispatch, commit }, message) {
      if (typeof message === 'string') {
        const tx = <IPendingTransaction>JSON.parse(message);
        commit('NEW_PENDING_TX', tx);
      }
    },
  },
  getters: {
    allPendingTxs(state) {
      return state.pendingTxs;
    },
    latestPendingTxs(state) {
      return state.pendingTxs.slice(0, 20);
    },
    totalPendingTxs(state) {
      return state.pendingTxs.length;
    },
    transaction(state) {
      return state.pendingTxs;
    },
  },
  modules: {},
});
