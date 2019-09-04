//引入mock
import Mock from 'mockjs'
//引入data.json
import data from './data.json'

Mock.mock('/goods',{code:0,data:data.goods})
Mock.mock('/evaluate',{code:0,data:data.evaluate})
Mock.mock('/info',{code:0,data:data.info})