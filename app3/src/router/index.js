//配置路由
    // import Vue from 'vue';
    // import VueRouter from 'vue-router';
import {createRouter, createWebHistory, useRouter} from 'vue-router';
    //使用插件
    //Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
//配置路由
    // export default new VueRouter({
    //     //配置路由
    //     routes:[
    //         {
    //             path:"/home",
    //             component:Home
    //         },
    //         {
    //             path:"/Search",
    //             component:Search
    //         },
    //         {
    //             path:"/Login",
    //             component:Login
    //         },
    //         {
    //             path:"/Register",
    //             component:Register
    //         }
    //     ]
    // })
const routes = [
            {
                path:"/Home",
                component:Home,
                meta:{show:true}
            },
            {
                path:"/Search",
                component:Search,
                meta:{show:true}
            },
            {
                path:"/Login",
                component:Login,
                meta:{show:false}
            },
            {
                path:"/Register",
                component:Register,
                meta:{show:false}
            },
            // {
            //     path:"*",
            //     redirect:"/Home"
            // }
            {
                path:"/",
                redirect:"/Home"
            }
]
const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;

