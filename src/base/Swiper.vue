<template>
    <swiper :options="swiperOption">
        <swiper-slide v-for="slide in swiper">
            <img :src="slide" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
    export default {
        props:{
            swiper:{}
        },
        name: 'carrousel',
        data() {
            return {
                swiperOption: {
                    autoplay: 3000,
                    setWrapperSize :true,
                    pagination : '.swiper-pagination',
                    paginationClickable :true,
                    mousewheelControl : true,
                    observeParents:true,
                },
            }
        },
        mounted() {

        }
    }
</script>
<style scoped>
    img{
        width: 100%;
    }
</style>