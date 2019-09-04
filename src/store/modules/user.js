//  //直接修改数据状态的方法的对象
//  //引入api相关接口
//  import {reqLogOut} from '../../api'
//  //引入常量
//  import {
//    RESE_USER,
//    CLEAR_USER
//  } from "../mutation-type";
//  const state = {
//    //用户信息
//    user: {},
//  }
//  const actions = {
//    //退出登录
//    async clearUser({
//      commit
//    }) {
//      const result = await reqLogOut()
//      if (result.code === 0) {
//        //成功退出
//        commit(CLEAR_USER)
//      }
//    }
//  }
//  const mutations = {
//    //重置用户信息
//    [CLEAR_USER](state) {
//      state.user = {}
//    },


//    // //更新用户信息
//    [RESE_USER](state, user) {
//      state.user = user
//    }
//  }
//  const getters = {}

//  export default new Vuex.Store({
//    state,
//    actions,
//    getters,
//    mutations
//  })