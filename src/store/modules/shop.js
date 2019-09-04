import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO
} from '../mutation-type'
//引入api相关接口
import {
  reqRatings,
  reqGoods,
  reqInfo
} from '../../api'
const state = {
  //点餐数据
  goods: [],
  //评价数据
  evaluate: {},
  //商家数据
  info: []
}
const mutations = {
  //更新点餐数据
  [RECEIVE_GOODS](state, {
    goods
  }) {
    state.goods = goods
  },
  // 更新评价的数据
  [RECEIVE_RATINGS](state, {
    ratings
  }) {
    state.ratings = ratings
  },
  // 更新商家的数据
  [RECEIVE_INFO](state, {
    info
  }) {
    state.info = info
  }
}
const actions = {
  // 发送请求,获取点餐的数据(食物的分类及食物信息)
  async getGoods({
    commit
  }) {
    const result = await reqGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {
        goods
      })
    }
  },
  // 发送请求,获取评价的数据()
  async getRatings({
    commit
  }) {
    const result = await reqRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {
        ratings
      })
    }
  },
  // 发送请求,获取商家的数据
  async getInfo({
    commit
  }) {
    const result = await reqInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {
        info
      })
    }
  }
}
const getters = {}



export default {
  state,
  mutations,
  actions,
  getters
}