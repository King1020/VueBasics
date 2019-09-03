//间接修改数据状态的方法的对象
//引入常量
import {ADDRESS_MATION, FOOD_CATEGORY,SHOPS_LIST} from "./mutation-type";
//引入api相关接口
import {reqAddress,reqCatgorys,reqShops} from '../api'
export default {
  //获取地址
 async getaddress({commit,state}) {
    const { longitude,latitude } = state
  const result = await reqAddress(latitude,longitude )
    //判断请求是否成功
  if (result.code===0){
    const address = result.data
    //commit更新
    commit(ADDRESS_MATION, address)
   }
  },
  //食品分类获取 
 async getcategory({commit},fn){
     const result =  await reqCatgorys()
     //判断请求是否成功获取食品分类数组
     if(result.code===0){
       const category =result.data
       //commit更新
      commit(FOOD_CATEGORY,category)
      typeof fn==='function'&&fn()//如果是函数就调用
     }
  },
  //商铺列表
 async getshops({commit,state}){
    const {latitude, longitude} = state
    const result = await reqShops(latitude, longitude)
    //判断请求是否成功
    if(result.code===0){
      const shops = result.data
      //commit更新
      commit(SHOPS_LIST, shops)
    }
  }
}