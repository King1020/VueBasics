import {
  CLEAR_USER,
  RESE_USER
} from '../mutation-type'
//引入api相关接口
import {
  reqLogOut,
} from '../../api'
const state = {
  //用户信息
  user: {},
}

const mutations = {
   //更新用户信息
   [RESE_USER](state, user) {
     state.user = user
   },
  //重置用户信息
  [CLEAR_USER](state) {
    state.user = {}
  },
  
}
const actions = {
  //退出登录
  async clearUser({
    commit
  }) {
    const result = await reqLogOut()
    if (result.code === 0) {
      //成功退出
      commit(CLEAR_USER)
    }
  },
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}