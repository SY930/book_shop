<template>
    <div class="header">
        {{title}}
        <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
    </div>
</template>
<script>
    export default {
        props:{
            title:{},
            back:{
                type:Boolean,
                default:false
                }

        },
        data(){
            return {

            }
        },
        created(){
        },
        methods: {
            goBack(){
                this.$router.history.go(-1)
            }
        },
        computed: {},
        mounted(){
        }
    }
</script>
<style scoped lang="less">
    .header{

        position: fixed;
        top:0;
        left:0;
        width: 100%;
        height: 50px;
        background: #ceffce;
        color:#000;
        text-align: center;
        line-height: 50px;
        i{
            float: left;
            margin-left: 10px;
        }
    }
</style>