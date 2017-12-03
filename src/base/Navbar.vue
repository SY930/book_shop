<template>
<nav>
    <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
    </router-link>
    <router-link to="/list">
        <i class="iconfont icon-liebiaoyemian"></i>
        <span>列表</span>
    </router-link>
    <router-link to="/collect">
        <i class="iconfont icon-shoucang"></i>
        <span>购物车</span>
    </router-link>
    <router-link to="/add">
        <i class="iconfont icon-add"></i>
        <span>添加</span>
    </router-link>
</nav>
</template>
<script>
    export default {
        data(){
            return {}
        },
        created(){
        },
        methods: {},
        computed: {},
        mounted(){
        }
    }
</script>
<style scoped lang="less">
    nav{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 55px;
        border-top: 1px solid #eee;
        display: flex;
       a{
           flex: 1;
           display: flex;
           flex-direction: column;
           justify-content: center;
            align-items: center;
           color: #c2c5ff;
       }
     .router-link-active{
        color:red;
    }
    }

</style>