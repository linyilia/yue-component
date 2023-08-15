import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import vueRouter from "./util/router"
// 挂载全局api
import api from './util/api'
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'

import VueCesium from 'vue-cesium'
Vue.use(VueCesium, {cesiumPath: 'https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js',accessToken: 'your token'
})

Vue.config.productionTip = false
Vue.prototype.baseUrl=window.url
Vue.prototype.$http = api
new Vue({
  render: h => h(App),
  router:vueRouter
}).$mount('#app')
