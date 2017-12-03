<template>
    <div>
        <div class="notify" >{{val}}</div>
    </div>
</template>
<script>
    export default {
        data(){
            return {val:'哈哈'}
        },
        created(){
        },
        methods: {
//            show(){ 在APP.vue中写
//                this.$notify('呃呃呃'，{delay：'1000'})
//            }
        },
        computed: {},
        mounted(){
        }
    }
</script>
<style scoped>
    .notify{
        width: 100px;
        height: 40px;
        background: rgba(0,0,0,.45);
        border-radius: 15px;
        line-height: 40px;
        text-align: center;
        color:#fff;
    }
</style>