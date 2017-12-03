<template>
    <div>
        <transition name="fadeIn">
            <keep-alive>
                <!--需要缓存的-->
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
        <transition name="fadeIn">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
        <NavBar></NavBar>

    </div>

</template>
<script>
    import NavBar from './base/Navbar.vue'
    export default {
        data(){
            return {}
        },
        created(){
        },
        methods: {},
        computed: {},
        mounted(){
        },
        components: {NavBar}
    }
</script>
<style lang="less">
    * {
        margin: 0;
        padding: 0;

    }

    a {
        text-decoration: none;
    }

    ul, li {
        list-style: none;
    }

    .scroll {
        position: absolute;
        top: 50px;
        bottom: 55px;
        overflow: auto;
        width: 100%;
    }
    .fadeIn-enter{
        opacity: 0;
    }
    .fadeIn-enter-active{
        transition: all .3s linear;
    }
    .fadeIn-leave-active{
        transition: all .3s linear;
        opacity: 0;
    }
</style>