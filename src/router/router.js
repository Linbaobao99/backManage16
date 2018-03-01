import Vue from 'vue'
import VueRouter from 'vue-router'
//导入受路由控制的组件
import Login from '../component/login/Login.vue'
import Admin from '../component/admin/Admin.vue'
//导入第三方库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

//使用路由
Vue.use(VueRouter)
Vue.use(ElementUI)

//导出路由实例
export default new VueRouter({
    routes:[
        {name:'login',path:'/login',component:Login},
        {name:'admin',path:"/admin",component:Admin},
    ]
})