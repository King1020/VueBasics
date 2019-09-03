// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
// 引入路由器并注册
import router from './router/index'
//vuex
import store from './store'
// 引入Header组件并注册全局
import Header from './components/Header/Header.vue'
//引入Star组件注册全局组件 
import Star from './components/Star/Star.vue'
// 注册Header全局路由
Vue.component('Header', Header)
// 注册Star全局路由
Vue.component('Star', Star)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router, //注册仓库
  store //状态
})
