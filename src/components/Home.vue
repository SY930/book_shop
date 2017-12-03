<template>
    <div>
        <MHeader title="首页"></MHeader>
        <div class="scroll">
            <Loading v-if="loading"></Loading>
            <template v-else>
        <Swiper :swiper="sliders"></Swiper>
            <div class="container">
            <h3>热门图书</h3>
            <ul class="hot">
                <li class="list" v-for="h in hot">
                    <img :src="h.bookCover" alt="">
                    <h3>{{h.bookName}}</h3>
                </li>
            </ul>
            </div>
            </template>
        </div>
    </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue'
    import Swiper from '../base/Swiper.vue'
    import Loading from '../base/loading.vue'
    import {getAll} from '../api'
    export default {
        data(){
            return {
                sliders:[],
                hot:[],
                loading:true
            }
        },
         created(){
           this.getData()
       },
        methods:{
          getData(){ //[sliders,books]
              getAll().then(res=>{
//                  console.log(res);
                  let sliders = res[0].data;
                  let hot = res[1].data
                  this.sliders = sliders;
                  this.hot = hot;
                    this.loading=false
              })
          }
        },
        components:{MHeader,Swiper,Loading}
    }
</script>
<style scoped lang="less">
    .container{
        width: 90%;
        margin: 0 auto;
        .hot{
            display: flex;
            padding-bottom:10px ;
            flex-wrap: wrap;
            .list{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 50%;
                text-align: center;
                margin: 5px 0;
                img{
                    width: 150px;
                    height: 150px;
                }
            }
        }

    }

</style>