import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: false,
    user: {
      name: null,
      email: null
    }
  },
  mutations: {
    addUser: (state, data) => {
      state.user = { name: data.name, email: data.email }
    },
    setAuth: (state, auth) => {
      state.auth = auth
    }
  },

  getters: {
    getAuth: state => {
      return state.auth
    }
  }
})
