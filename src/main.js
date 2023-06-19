import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import vueRouter from "./util/router"
// 挂载全局api
import api from './util/api'
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.baseUrl=window.url
Vue.prototype.$http = api
new Vue({
  render: h => h(App),
  router:vueRouter
}).$mount('#app')
