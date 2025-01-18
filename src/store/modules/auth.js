// src/store/modules/auth.js
import axios from "@/plugins/axios";

const state = {
  user: null,
  token: null,
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_TOKEN(state, token) {
    state.token = token;
  },
};

const actions = {
  async login({ commit }, credentials) {
    const response = await axios.post("/auth/login", credentials);
    commit("SET_USER", response.data.user);
    commit("SET_TOKEN", response.data.token);

    // Almacenar token en localStorage
    localStorage.setItem("token", response.data.token);
  },
  logout({ commit }) {
    commit("SET_USER", null);
    commit("SET_TOKEN", null);

    // Limpiar token de localStorage
    localStorage.removeItem("token");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
