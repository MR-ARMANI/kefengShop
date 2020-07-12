import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 公共样式
import './assets/css/base.css'
//字体图标
import './assets/font/iconfont.css'
import './assets/font/iconfont.js'
//引入vant组件库
import Vant from 'vant';
import 'vant/lib/index.css';
//引入swiper插件
import "swiper/css/swiper.min.css";
//动画效果
import 'animate.css/animate.css'
//引入axios
import axios from 'axios'
Vue.prototype.$ajax=axios
//引入qs
import qs from 'qs'
Vue.prototype.$qs=qs

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
