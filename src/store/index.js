import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: null,
      email: null
    }
  },
  mutations: {
    'ADD_USER' (state, data) {
      state.user = { name: data.name, email: data.email }
    },
    'REMOVE_USER' (state) {
      state.user = { name: null, email: null }
    }
  },
  actions: {
    removeUser ({ commit }) {
      commit('REMOVE_USER')
    },
    addUser ({ commit }, payload) {
      commit('ADD_USER', payload)
    }
  }
})
