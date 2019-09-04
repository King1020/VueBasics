<template>
  <div>
    <!-- 显示路由组件内容 -->
    <router-view></router-view>
    <!-- 底部导航隐藏 -->
    <Footer v-show="$route.meta.isShow" />
  </div>
</template>

<script>
// 引入底部导航
import Footer from './components/FooterGuide/Footer.vue'
import { reqUseInfo } from './api'
import {RESE_USER} from './store/mutation-type.js'
export default {
  components: {
    Footer
  },

  async mounted() {

    
    // 首页地址信息
    this.$store.dispatch('getaddress')

    //调用接口
    const result = await reqUseInfo()
    if (result.code === 0) {
      const user =result.data
      this.$store.commit(RESE_USER,user)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus"></style>
