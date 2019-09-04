import {
  ADDRESS_MATION,
  FOOD_CATEGORY,
  SHOPS_LIST,
} from '../mutation-type'
//引入api相关接口
import {
  reqAddress,
  reqCatgorys,
  reqShops,
} from '../../api'
const state = {
  //纬度
  latitude: '40.10039',
  //经度
  longitude: '116.36868',
  //地址信息
  address_mation: {},
  //食品列表
  food_category: [],
  //商铺列表
  shops_list: [],
}
const mutations = {
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
}
const actions = {
  //获取地址
  async getaddress({
    commit,
    state
  }) {
    const {
      longitude,
      latitude
    } = state
    const result = await reqAddress(latitude, longitude)
    //判断请求是否成功
    if (result.code === 0) {
      const address = result.data
      //commit更新
      commit(ADDRESS_MATION, address)
    }
  },
  //食品分类获取 
  async getcategory({
    commit
  }, fn) {
    const result = await reqCatgorys()
    //判断请求是否成功获取食品分类数组
    if (result.code === 0) {
      const category = result.data
      //commit更新
      commit(FOOD_CATEGORY, category)
      typeof fn === 'function' && fn() //如果是函数就调用
    }
  },
  //商铺列表
  async getshops({
    commit,
    state
  }) {
    const {
      latitude,
      longitude
    } = state
    const result = await reqShops(latitude, longitude)
    //判断请求是否成功
    if (result.code === 0) {
      const shops = result.data
      //commit更新
      commit(SHOPS_LIST, shops)
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