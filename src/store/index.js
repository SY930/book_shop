/**
 * Created by SONG on 2017/11/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex);
//状态 依赖store容器
let state = {
    cartList :[]
};
export default new Vuex.Store({
    state,
    strict:true,
    mutations,
    getters,
    plugins:[logger()]
})

