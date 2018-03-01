import Vue from 'vue'
import VueRouter from 'vue-router'
//导入受路由控制的组件
import Login from '../component/login/Login.vue'

//使用路由
Vue.use(VueRouter)

//导出路由实例
export default new VueRouter({
    routes:[
        {name:'login',path:'/login',component:Login}
    ]
})