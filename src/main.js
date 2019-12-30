import Vue from 'vue'
import App from './App.vue'
import './config/rem';
import router from './router/index'
import MintUI from 'mint-ui'

import VueWechatTitle from 'vue-wechat-title'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
import Title from '../src/components/title/title.js'
import Alert from '../src/components/alert/alert.js'
// 按需引入mint-ui
Vue.use(MintUI)
Vue.use(VueWechatTitle)

Vue.prototype.$title=Title
Vue.prototype.$Alert=Alert;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')