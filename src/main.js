import Vue from 'vue'
import App from './App'
import router from './router'

// Import Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// Import material icons
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
