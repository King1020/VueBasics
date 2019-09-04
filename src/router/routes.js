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
//引入商家信息组件
import Info from '../pages/Shop/Info/Info.vue'
//引入点餐组件
import Goods from '../pages/Shop/Goods/Goods.vue'
//引入商家组件
import Shop from '../pages/Shop/Shop.vue'
//引入评论组件
import Ratings from '../pages/Shop/Ratings/Ratings.vue'
//配置路由
export default [{
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
    path: '/shop',
    component: Shop,
    children: [{
        path: '/shop/goods',
        component: Goods
      },
      {
        path: '/shop/ratings',
        component: Ratings
      },
      {
        path: '/shop/info',
        component: Info
      },
      {
        path:'/shop',
        redirect:'/shop/goods'
      }
    ]
  },
  {
    path: '/',
    redirect: '/msite'
  }
]