//  // 引入常量名
//  import {
//    RECEIVE_GOODS,
//    RECEIVE_EVALUATE,
//    RECEIVE_INFO
//  } from '../mutation-type'
//  // 引入api的相关接口
//  import {
//    reqGoods,
//    reqEvaluate,
//    reqInfo
//  } from '../../api'
//  const state = {
//    //点餐数据
//    goods: [],
//    //评价数据
//    evaluate: {},
//    //商家数据
//    info: []
//  }
//  const mutations = { // 更新点餐的数据
//    [RECEIVE_GOODS](state, {goods}) {
//      state.goods = goods
//    },
//    // 更新评价的数据
//    [RECEIVE_EVALUATE](state, {evaluate }) {
//      state.evaluate = evaluate
//    },
//    // 更新商家的数据
//    [RECEIVE_INFO](state, {info}) {
//      state.info = info
//    }
//  }
//  const actions = {
//    // 发送请求,获取点餐的数据(食物的分类及食物信息)
//    async getGoods({ commit}) {
//      const result = await reqGoods()
//      if (result.code === 0) {
//        const goods = result.data
//        commit(RECEIVE_GOODS, {
//          goods
//        })
//      }
//    },
//    // 发送请求,获取评价的数据()
//    async getevaluate({
//      commit
//    }) {
//      const result = await reqEvaluate()
//      if (result.code === 0) {
//        const evaluate = result.data
//        commit(reqEvaluate, {
//          evaluate
//        })
//      }
//    },
//    // 发送请求,获取商家的数据
//    async getInfo({
//      commit
//    }) {
//      const result = await reqInfo()
//      if (result.code === 0) {
//        const info = result.data
//        commit(RECEIVE_INFO, {
//          info
//        })
//      }
//    }
//  }
//  const getters = {}

//  export default new Vuex.Store({
//    state,
//    actions,
//    getters,
//    mutations
//  })