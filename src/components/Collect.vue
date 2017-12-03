
<template>
    <div>
        <MHeader title="购物车"></MHeader>
        <ul class="scroll">
            <li v-for="l in cartList">
                <img :src="l.bookCover" alt="">
                <h3>{{l.bookName}}</h3>
                <button>-</button>{{l.bookCount}}<button>+</button>
                <p>小计：{{l.bookPrice*l.bookCount}}</p>
                <button>删除</button>
            </li>
            <li>
                共：{{count}} 本
            </li>
        </ul>
    </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue'
//    辅助函数 语法糖
    import {mapState,mapGetters} from 'vuex'
    console.log(mapState(['cartList']));
    export default {
        data(){
            return {}
        },
        created(){
        },
        methods: {},
        computed: {
            ...mapState(['cartList']),
                ...mapGetters(['count'])
//            cartList(){
//                return this.$store.state.cartList
//            }
        },
        mounted(){
        },
        components:{MHeader}
    }
</script>
<style scoped>
</style>