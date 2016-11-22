import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import configRouter from './routes'
import store from './vuex/store'
import {sync} from 'vuex-router-sync'

Vue.use(VueRouter)
const router = new VueRouter({routes: configRouter})
sync(store, router)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
