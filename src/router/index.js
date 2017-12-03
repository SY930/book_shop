/**
 * Created by SONG on 2017/11/22.
 */
import Vue from 'vue'
import Home from '../components/Home.vue'
import List from '../components/List.vue'
import Add from '../components/Add.vue'
import Detail from '../components/Detail.vue'
import Collect from '../components/Collect.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
export default new VueRouter({
    routes:[
        {path:'/',
            redirect:'/home',
        },//this.$route.meta.keepAlive
        {path:'/home',
            component:Home,                meta:{keepAlive:true}
            },
        {path:'/list',component:List},
        {path:'/add',component:Add},
        {path:'/detail/:nid',component:Detail,name:'detail'},
        {path:'/collect',component:Collect},
        {path:'*',redirect:'/home'},
    ]
})