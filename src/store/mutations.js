//直接修改数据状态的方法的对象
//引入常量
import {
  ADDRESS_MATION,
  FOOD_CATEGORY,
  SHOPS_LIST,
  RESE_USER,
  CLEAR_USER,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO
} from './mutation-type'
export default {
  //地址信息
  [ADDRESS_MATION](state, address) {
    state.address_mation = address
  },
  //食品分类
  [FOOD_CATEGORY](state, category) {
    state.food_category = category
  },
  //商铺列表
  [SHOPS_LIST](state, shops) {
    state.shops_list = shops
  },

  //重置用户信息
  [CLEAR_USER](state) {
    state.user = {}
  },


  // //更新用户信息
  [RESE_USER](state, user) {
    state.user = user
  },


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