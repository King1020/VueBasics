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
export default {
  components: {
    Footer
  },
  
  mounted () {
    // 地址信息
    this.$store.dispatch('getaddress')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus"></style>
