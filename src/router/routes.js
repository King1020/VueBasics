// 引入外卖
import Msite from '../pages/Msite/Msite.vue'
// 搜索
import Search from '../pages/Search/Search.vue'
// 订单
import Order from '../pages/Order/Order.vue'
// 我的
import Profile from '../pages/Profile/Profile.vue'
// Login组件
import Login from '../pages/Login/Login.vue'
export default [
  {
    path: '/msite',
    component: Msite,
    // 是否显示底部footer  true:显示 false:隐藏
    meta: {
      isShow: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShow: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShow: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShow: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
