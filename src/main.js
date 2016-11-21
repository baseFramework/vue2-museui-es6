import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import configRouter from './routes'
import { sync } from 'vuex-router-sync'


Vue.use(VueRouter)

Vue.config.debug = true

const router = new VueRouter()
configRouter(router)

// router 与 vuex 同步
sync(store, router)

// 路由重定向
router.redirect({
  '/': '/index'
})

router.start(Vue.extend(App), '#app')
