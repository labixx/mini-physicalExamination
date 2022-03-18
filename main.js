import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import store from './store/index.js'
import uView from "uview-ui";
Vue.use(uView);
import api from './api/index'
import { http } from './utils/request.js'
Vue.prototype.$http = http
Vue.prototype.$api = api
Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
  store,
  ...App
})
app.$mount()
// #endif
