// user.js
const state = {
    profile: null,
  };
  
  const mutations = {
    SET_PROFILE(state, profile) {
      state.profile = profile;
    },
    CLEAR_PROFILE(state) {
      state.profile = null;
    },
  };
  
  const actions = {
    fetchProfile({ commit }, profile) {
      commit('SET_PROFILE', profile);
    },
    clearProfile({ commit }) {
      commit('CLEAR_PROFILE');
    },
  };
  
  const getters = {
    profile: (state) => state.profile,
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  };
  