import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import router from './router';
import request from '@/utils/request';
import store from './store/store';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import $ from 'jquery'  //导入jquery

Vue.prototype.$ = $   //将$(jquery)挂在到vue.prototype身上，让所有的Vue共享这个方法

Vue.config.productionTip = false;
//引入request.js
Vue.prototype.request = request;
//设置大小，适配屏幕
Vue.use(ElementUI, {
    size: "mini"
});
//让请求携带上浏览器的cookie
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
