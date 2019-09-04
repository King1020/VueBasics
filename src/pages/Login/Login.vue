<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{'on':loging}" @click="loging=true">短信登录</a>
          <a href="javascript:;" :class="{'on':!loging}" @click="loging=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{'on':loging}">
            <section class="login_message">
              <!-- right为true手机号正确 手机验证码登录表单验证 -->
              <input
                type="tel"
                maxlength="11"
                placeholder="手机号"
                v-model="phone"
                name="phone"
                v-validate="'required|phone'"
              />
              <span
                style="color:red"
                v-show="errors.has('phone')"
                class="help is-danger"
              >{{ errors.first('phone') }}</span>
              <button
                class="get_verification"
                :disabled="!rightPo||sendTime>0"
                :class="{right:rightPo}"
                @click.prevent="Code"
              >{{sendTime>0?`已发送(${sendTime})s`:'获取验证码'}}</button>
            </section>
            <section class="login_verification">
              <!-- 验证码表单验证 -->
              <input
                type="tel"
                maxlength="8"
                placeholder="验证码"
                name="code"
                v-model="code"
                v-validate="'required|code'"
              />
              <span
                style="color:red"
                v-show="errors.has('code')"
                class="help is-danger"
              >{{ errors.first('code') }}</span>
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{'on':!loging}">
            <section>
              <section class="login_message">
                <!-- 用户名表单验证 -->
                <input
                  type="tel"
                  maxlength="11"
                  placeholder="手机/邮箱/用户名"
                  name="name"
                  v-model="name"
                  v-validate="'required'"
                />
                <span
                  style="color:red"
                  v-show="errors.has('name')"
                  class="help is-danger"
                >{{ errors.first('name') }}</span>
              </section>
              <section class="login_verification">
                <!-- 显示或隐藏密码 -->
                <input
                  :type="kpwd?'text':'password'"
                  maxlength="8"
                  placeholder="密码"
                  name="pwd"
                  v-model="pwd"
                  v-validate="'required'"
                />
                <span
                  style="color:red"
                  v-show="errors.has('pwd')"
                  class="help is-danger"
                >{{ errors.first('pwd') }}</span>
                <div class="switch_button" :class="kpwd?'on':'off'" @click="kpwd=!kpwd">
                  <div class="switch_circle" :class="{'rightpwd':kpwd}"></div>
                  <span class="switch_text">{{kpwd?'abc':'...'}}</span>
                </div>
              </section>
              <section class="login_message">
                <input
                  type="text"
                  maxlength="4"
                  placeholder="验证码"
                  name="captcha"
                  v-model="captcha"
                  v-validate="'required'"
                />
                <!-- 图片验证码 验证表单 -->
                <span
                  style="color:red"
                  v-show="errors.has('captcha')"
                  class="help is-danger"
                >{{ errors.first('captcha') }}</span>
                <img
                  class="get_verification"
                  ref="kinglo"
                  @click="sendKiss"
                  src="http://localhost:5000/captcha"
                  alt="captcha"
                />
              </section>
            </section>
          </div>
          <button class="login_submit" @click.prevent="login">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back">
        <i class="iconfont icon-jiantou2" @click="$router.back()"></i>
      </a>
    </div>
  </section>
</template>

<script>
//引入接口
import { reqSendCode, reqPwdLogin,reqSmsLogin } from '../../api'
//引入mutation的常量名
import {RESE_USER} from '../../store/mutation-type.js'
export default {
  data() {
    return {
      loging: true, //默认登录方式 true  手机号码登录  false  密码登录
      phone: '', //手机号
      sendTime: 0, //倒计时
      kpwd: false, //用来显示或隐藏密码
      code: '', //短信验证码
      name: '', //用户名
      pwd: '', //密码
      captcha: '' //图形验证码
    }
  },
  computed: {
    rightPo() {
      return /[1]\d{10}/.test(this.phone) //简单的手机号正则表达式
    }
  },
  methods: {
    //发送手机验证码
    async Code() {
      //倒计时
      this.sendTime = 30
      this.TimeId = setInterval(() => {
        this.sendTime--
        if (this.sendTime < 0) {
          this.sendTime = 0
          //清除定时器
          clearInterval(this.TimeId)
        }
      }, 1000)
      //发送手机验证码  调用接口
      const result = await reqSendCode(this.phone)
      if (result.code === 0) {
        alert('发送验证码成功')
      } else {
        this.sendTime = 0 //到计时为零
        clearInterval(this.TimeId) //清除定时器
        alert('发送验证码失败')
      }
    },
    //登录
    async login() {
      let names
      const { loging, phone, code, name, pwd, captcha } = this
      //判断登录方式
      if (loging) {
        // 手机的方式/短信验证码
        names = ['phone', 'code']
      } else {
        // 用户名/密码 图形码的方式
        names = ['name', 'pwd', 'captcha']
      }

      //表单验证是否全部通过
      const success = await this.$validator.validateAll(names)//通过为true 否则为false
      //登录
      if (success) {
        let result //定义统一变量
        if (loging) {
          //调用手机接口
          result = await reqSmsLogin(phone, code)
        } else {
          //调用用户名接口
          result = await reqPwdLogin({name, pwd, captcha})
        }
        //判断result.code等不等于零
        if (result.code === 0) {
          const user = result.data //拿到用户信息
          this.$store.commit(RESE_USER,user) //提交
          //登录成功 跳转个人中心页面
          this.$router.replace('/profile')
        } else {
          //没有成功登录
          alert('啊哦！登录失败')
        }
      }
    },

    //发送图形验证码
    sendKiss() {
      this.$refs.kinglo.src = 'http://localhost:5000/captcha?kiss=' + Date.now()
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.loginContainer
  width 100%
  height 100%
  background #fff
  .loginInner
    padding-top 60px
    width 80%
    margin 0 auto
    .login_header
      .login_logo
        font-size 40px
        font-weight bold
        color #02a774
        text-align center
      .login_header_title
        padding-top 40px
        text-align center
        >a
          color #333
          font-size 14px
          padding-bottom 4px
          &:first-child
            margin-right 40px
          &.on
            color #02a774
            font-weight 700
            border-bottom 2px solid #02a774
    .login_content
      >form
        >div
          display none
          &.on
            display block
          input
            width 100%
            height 100%
            padding-left 10px
            box-sizing border-box
            border 1px solid #ddd
            border-radius 4px
            outline 0
            font 400 14px Arial
            &:focus
              border 1px solid #02a774
          .login_message
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .get_verification
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              border 0
              color #ccc
              font-size 14px
              background transparent
              &.right
                color black
          .login_verification
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .switch_button
              font-size 12px
              border 1px solid #ddd
              border-radius 8px
              transition background-color 0.3s, border-color 0.3s
              padding 0 6px
              width 30px
              height 16px
              line-height 16px
              color #fff
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              &.off
                background #fff
                .switch_text
                  float right
                  color #ddd
              &.on
                background #02a774
              >.switch_circle
                position absolute
                top -1px
                left -1px
                width 16px
                height 16px
                border 1px solid #ddd
                border-radius 50%
                background #fff
                box-shadow 0 2px 4px 0 rgba(0, 0, 0, 0.1)
                transition transform 0.3s
                &.rightpwd
                  transform translateX(27px)
          .login_hint
            margin-top 12px
            color #999
            font-size 14px
            line-height 20px
            >a
              color #02a774
        .login_submit
          display block
          width 100%
          height 42px
          margin-top 30px
          border-radius 4px
          background #4cd96f
          color #fff
          text-align center
          font-size 16px
          line-height 42px
          border 0
      .about_us
        display block
        font-size 12px
        margin-top 20px
        text-align center
        color #999
    .go_back
      position absolute
      top 5px
      left 5px
      width 30px
      height 30px
      >.iconfont
        font-size 20px
</style>
