// 路由器对象模块
// 引入Vue
import Vue from 'vue'
// 引入Vue-Router
import VueRouter from 'vue-router'

import routes from './routes'
// 声明使用路由
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes
})
