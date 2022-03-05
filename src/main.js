import Vue from 'vue'
import App from './App'
import router from "./router"

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.prototype.$http =axios.create({
  baseURL: 'http://localhost:3001/api'
})

Vue.config.productionTip = false

Vue.use(router)
Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
