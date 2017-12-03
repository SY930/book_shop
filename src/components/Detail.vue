<template>
    <div class="detail">
        <MHeader title="详情页" :back="true"></MHeader>
        <div class="scroll ">
            <ul>
                <li>
                    <label for="bookName">书的名称</label>
                    <input type="text" v-model="book.bookName" id="bookName">
                </li>
                <li>
                    <label for="bookInfo">书的信息</label>
                    <input type="text" v-model="book.bookInfo" id="bookInfo">
                </li>
                <li>
                    <label for="bookPrice">书的价格</label>
                    <input type="text" v-model.number="book.bookPrice" id="bookPrice">
                </li>
                <li>
                    <button @click="update">确认修改</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue'
    import {getOneBook,updataBook} from '../api'
    export default {
        data(){
            return {
                book:{}
            }
        },
        watch:{
//            只要路径参数一变就刷新数据
            $route(){
                this.getData();
            }
        },
        created(){
            this.getData()
        },
        methods: {
            getData(){
                getOneBook(this.bid).then(res=>{
                    this.book = res.data;
//                    如果是空对象 需要跳转回列表页
//                    Object.keys把对象的key转化成数组
                    Object.keys(this.book).length>0?void 0:this.$router.push('/list')
                })
            },
            update(){
                updataBook(this.bid,this.book);
                this.$router.push('/list');//修改完成后跳转页面
            }
        },
        computed: {
            bid(){
                return this.$route.params.nid
            }
        },
        mounted(){
        },
        components:{MHeader}
    }
</script>
<style scoped lang="less">
    .detail{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right:0;
        z-index: 100;
        background: #fff;
    }
    ul{
        margin:10px 10px 0 10px;
        li{
            label{
                display: block;
                font-size: 25px;
            }
            input{
                margin: 10px 0;
                height: 25px;
                width: 100%;
            }
            button{
                width: 60px;
                height: 30px;
                background: #00b3ee;
                color:#fff;
                outline: none;
                border-radius: 5px;
                border: 0;
            }
        }
    }
</style>