import { createStore } from 'vuex';

export default createStore({
  state: {
    createModal: { isOpen: false },
    createSideBar: { isOpen: false },
  },
  mutations: {
    setIsModalOpen(state, payload) {
      state.createModal.isOpen = payload;
    },
    setIsSideOpen(state, payload) {
      state.createSideBar.isOpen = payload;
    },
  },
  actions: {
    openModal({ commit }) {
      commit('setIsModalOpen', true);
    },
    closeModal({ commit }) {
      commit('setIsModalOpen', false);
    },
    openSide({ commit }) {
      commit('setIsSideOpen', true);
    },
    closeSide({ commit }) {
      commit('setIsSideOpen', false);
    },
  },
  modules: {},
});
