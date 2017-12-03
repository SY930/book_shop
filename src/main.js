/**
 * Created by SONG on 2017/11/16.
 */
//这样直接引用vue 引用的并不是vue.js 引用的是vue的runtime
//vue = compiler+runtime(compiler 可以编译模板) 不支持template可以用一下的放是引入：
// import Vue from 'vue/dist/vue' 但是compiler有6k不建议这么用，用render渲染
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);
import notify from './plugin/notify'
Vue.use(notify,{
    delay:2000
    });
import store from './store'
new Vue({


    //render函数的作用是将虚拟dom,渲染成真实的dom
    //createElement 返回的是虚拟dom
    render: (h) =>h(App),
    router,
    store
    // render:function (createElement) {
    //     return createElement('h1',[
    //         'hello',
    //     //    子标签
    //         createElement('span','一则头条')
    //     ])
    // }

}).$mount('#app');











// //js不支持commonjs写法，webpack支持
//     import XXX from './b.js'
// let str = require('./a.js');
// console.log(str);
// console.log(XXX);
//
// import './index.css'
// import './style.less'
// //在js中引入图片需要import,或者写一个线上地址
// import page from './u.jpg'
// //page 就是打包后的路径
// console.log(page);
// let img = new Image();
// img.src = page;
// document.body.appendChild(img);