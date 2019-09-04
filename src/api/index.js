// 引入ajax
import ajax from './ajax.js'
const KING = '/api'
// 根据经纬度获取位置、
export const reqAddress = (latitude, longitude) => ajax(KING + `/position/${latitude},${longitude}`)

// latitude---纬度
// longitude---经度

// 获取食品分类
export const reqCatgorys = () => ajax(KING + `/index_category`)

// 根据经纬度获取商铺列表
export const reqShops = (latitude, longitude) => ajax(KING + `/shops`, {
  latitude,
  longitude
})

// 发送短信验证码 
export const reqSendCode = (phone) => ajax(KING + `/sendcode`, {
  phone
})

// 手机号码和验证码登录
export const reqSmsLogin = (phone, code) => ajax(KING + `/login_sms`, {
  phone,
  code
}, 'POST')

// 用户名 密码登录-----Post
export const reqPwdLogin = ({
  name,
  pwd,
  captcha
}) => ajax(KING + `/login_pwd`, {
  name,
  pwd,
  captcha
}, 'POST')

// 自动登录
export const reqUseInfo = () => ajax(KING + `/userinfo`)
// 退出登录操作
export const reqLogOut = () => ajax(KING + `/logout`)



//获取点餐数据
export const reqGoods = () => ajax('/goods')

//获取评价数据
export const reqRatings = () => ajax('/ratings')

//获取商家的数据
export const reqInfo = () => ajax('/info')