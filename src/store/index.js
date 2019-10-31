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
    addUser: (state, data) => {
      state.user = { name: data.name, email: data.email }
    },
    removeUser: (state) => {
      state.user = { name: null, email: null }
    }
  }
})
