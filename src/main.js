import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import axios from 'axios'
import store from './store.js'

axios.defaults.baseURL = "https://cis410-fa20-barnardlofquist-api-3.azurewebsites.net"

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
