//导入Vue库
import Vue from 'vue'
//导入根组件
import App from './component/App.vue'
import { create } from 'domain';

//渲染根组件到占位标签上
new Vue({
    el:'#app',
    render:createElement=>createElement(App)
})