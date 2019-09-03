//直接修改数据状态的方法的对象
//引入常量
import {
  ADDRESS_MATION,
  FOOD_CATEGORY,
  SHOPS_LIST
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
  [SHOPS_LIST](state,shops) {
    state.shops_list = shops
  }
}