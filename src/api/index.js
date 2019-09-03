// 引入ajax
import ajax from './ajax.js'
const KING = '/api'
// 根据经纬度获取位置、
export const reqAddress = (latitude ,longitude) => ajax(KING + `/position/${latitude},${longitude}`)

// latitude---纬度
// longitude---经度

// 获取食品分类
export const reqCatgorys = () => ajax(KING + `/index_category`)

// 根据经纬度获取商铺列表
export const reqShops = (latitude, longitude) => ajax(KING + `/shops`, {
  latitude,
  longitude
})
