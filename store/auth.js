const state = {
    isLoggedIn: false,
  };
  
  const mutations = {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  };
  
  const actions = {
    login({ commit }) {
      // Implement your login logic here
      // Commit 'login' mutation if authentication is successful
      // Otherwise, handle login failure
      commit('login');
    },
    logout({ commit }) {
      // Implement your logout logic here
      commit('logout');
    },
  };
  
  const getters = {
    isLoggedIn: (state) => state.isLoggedIn,
  };
  
  export default {
    state,
    mutations,
    actions,
    getters,
  };
  