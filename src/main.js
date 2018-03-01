//导入Vue库
import Vue from 'vue'
//导入根组件
import App from './component/App.vue'
import router from './router/router.js'//会自动读取到router文件下的文件
//引用默认初始化样式
import 'normalize.css'
//引用公共样式
import './less/common.less'
//因为不是vue插件,导入之后只能在当前模块使用
import axios from 'axios'
import api,{domain} from './js/api.js'
//配置默认域名,请求时就不用再URL里加域名了
axios.defaults.baseURL = domain;
//因为我们调用的接口跨域,默认情况下接口给我们设置cookie无效,为了让它有效,我们必须添加此设置
axios.defaults.withCredentials = true;
//为了使用方便,把axios,api添加到vue原型,将来vue组件就可以直接使用
Vue.prototype.$axios = axios;
Vue.prototype.$api = api;

//渲染根组件到占位标签上
new Vue({
    el:'#app',
    router:router,
    render:createElement=>createElement(App)
})