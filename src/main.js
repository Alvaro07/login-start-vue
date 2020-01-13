import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebase from '@/firebase'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://login-start-vue.firebaseio.com'
axios.defaults.headers.get.Accepts = 'application/json'

firebase.auth.onAuthStateChanged(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
