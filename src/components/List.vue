<template>
    <div>
        <MHeader title="列表页"></MHeader>
        <div class="scroll content" ref="scroll" @scroll="loadMore">
            <ul>
                <router-link :to="{name:'detail',params:{nid:book.bookId}}" tag="li" v-for="book in listBooks">
                    <img :src="book.bookCover" alt="">
                    <div class="bookList">
                        <h4>{{book.bookName}}</h4>
                        <p>{{book.bookInfo}}</p>
                        <b> {{book.bookPrice}}</b>
                        <div class="btn-list">
                            <button @click="remove(book.bookId)">删除</button>
                            <button @click.stop="addCart(book)">添加</button>
                        </div>

                    </div>

                </router-link>
            </ul>
            <div @click="more" class="more">加载更多</div>
        </div>
    </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue'
    import {pagination, removeBook} from '../api'
    import * as Types from '../store/mutations-types'
    export default {
        data(){
            return {
                listBooks: [],
                offset:0,//偏移量
                hasMore:true,//是否有更多
                isLoading:false
            }
        },
        created(){
            this.getData()
        },
        methods: {
            loadMore(){
                //                节流=>进来时触发scroll事件可能触发n次 先进来开一个定时器，下次触发时将上一次的定时器清除掉
                clearTimeout(this.timer);
                this.timer=setTimeout(()=>{
                    //滚动加载更多
                    let {scrollTop,clientHeight,scrollHeight} = this.$refs.scroll;
                    if(scrollTop+clientHeight+10>=scrollHeight){
                        this.getData();
                    }

                },100);

            },
            more(){
                this.getData()
            },
            addCart(book){
                this.$store.commit(Types.ADD_CART,book)
            },
            getData(){
                if(this.hasMore&&!this.isLoading){
                    this.isLoading = true;
                    pagination(this.offset).then(res => {
                        let {hasMore,books} = res.data;
                        console.log(books);
                        this.listBooks = [...this.listBooks,...books];
                        this.hasMore = hasMore;
                        this.isLoading=false;//加载完毕
                        this.offset=this.listBooks.length;
                    })
                }

            },
            remove(id){
                removeBook(id).then(res => {
                    this.listBooks = this.listBooks.filter(item => item.bookId != id)
                })
            }
        },
        computed: {},
        mounted(){
        },
        components: {MHeader}
    }
</script>
<style scoped lang="less">


    .content {
        width: 100%;
    }

    .content h4 {
        font-size: 20px;
        line-height: 35px;
    }

    p {
        color: #2a2a2a;
        line-height: 35px;
    }

    b {
        color: red;
    }

    .content ul {

        padding: 10px;

    li {
        display: flex;
        padding: 10px 0;
        border-bottom: 1px solid #a3a6bb;

    .bookList {
        display: flex;
        flex-direction: column;
        justify-content: center;

    button {
        width: 60px;
        height: 25px;
        background: orangered;
        color: #fff;
        border: none;
        border-radius: 15px;
        outline: none;
    }

    }

    img {
        width: 130px;
        height: 150px;

    }

    }
    }
.btn-list{
    display: flex;
    justify-content: space-around;
}
    .more{
        margin: 10px;
        background: #1fe0a5;
        overflow-x: hidden;
        height: 35px;
        line-height: 35px;
        text-align: center;
        color: #fff;
    }
</style>