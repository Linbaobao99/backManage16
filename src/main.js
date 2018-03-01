//导入Vue库
import Vue from 'vue'
//导入根组件
import App from './component/App.vue'
import router from './router/router.js'//会自动读取到router文件下的文件

//渲染根组件到占位标签上
new Vue({
    el:'#app',
    router:router,
    render:createElement=>createElement(App)
})