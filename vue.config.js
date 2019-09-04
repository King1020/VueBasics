const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
// vue.config.js
module.exports = {
  configureWebpack: {
   resolve: {
     extensions: ['.js', '.vue', '.json'],
     alias: {
       'vue$': 'vue/dist/vue.esm.js',
       '@': resolve('src'),
     }
   },
  },
   devServer: {
     proxy: {
       '/api': {
         target: 'http://localhost:5000',//目标地址
         changeOrigin: true, //是否跨域
           pathRewrite: {
             '^/api':''    
           },
       },
     }
   }
}