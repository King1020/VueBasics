//引入vue
 import Vue from 'vue'
 //引入vuex
 import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
 //配置对象

//声明使用
 Vue.use(Vuex)

 export default new Vuex.Store({
       state,
       actions,
       getters,
       mutations
 })