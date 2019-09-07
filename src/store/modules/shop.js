import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  Add_FOOD,
  REDUX_FOOD
} from '../mutation-type'
//引入api相关接口
import {
  reqRatings,
  reqGoods,
  reqInfo
} from '../../api'
//引入vue
import Vue from 'vue'
const state = {
  //点餐数据
  goods: [],
  //评价数据
  evaluate: {},
  //商家数据
  info: [],
  //食物对象 购物车中的对象
  foodArr: []

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
  },
  //增加food的count
  [Add_FOOD](state, {
    food
  }) {
    // 判断当前的count是否有值
    if (!food.count) {
      // 没有值
      //使用Vue.set 变为响应式数据
      Vue.set(food, "count", 1)
      //把food对象添加到数组中
      state.foodArr.push(food)
    } else {
      // 有值
      food.count++
    }
  },
  //减少food的count
  [REDUX_FOOD](state, {
    food
  }) {
    //如果food.count的值大于0就可减
    if (food.count > 0) {
      food.count--
      //判断当前的食物数量是不是0,才能删除食物
      if (food.count === 0) {
        state.foodArr.splice(state.foodArr.indexOf(food), 1) //indexOf:根据对象获取索引值
      }
    }
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
  },

  //更新food的count数据
  updateFood({
    commit
  }, {
    isAdd,
    food
  }) {
    //判断isAdd是true还是false ，true--增加  false--减少
    if (isAdd) {
      //增加
      commit(Add_FOOD, {
        food
      })
    } else {
      //减少
      commit(REDUX_FOOD, {
        food
      })
    }
  }
}
const getters = {
  //计算食物总数量
  totalCount(state) {
    return state.foodArr.reduce((pre, food) => pre + food.count, 0)
  },

  //计算总价格
  totalPrice(state) {
    return state.foodArr.reduce((pre, food) => pre + food.count * food.price, 0)
  }
}



export default {
  state,
  mutations,
  actions,
  getters
}