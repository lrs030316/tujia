<template>
  <!-- 首页搜索框 -->
  <router-view></router-view>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <!-- 首页轮播图 -->
    <div>
     <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in swiperList" :key="item.id">
          <img :src="item.src" alt="" />
        </van-swipe-item>
    </van-swipe>
    <adderss-menu></adderss-menu>
    <serve-menu></serve-menu>
    <pro-duct></pro-duct>
    </div>
</template>

<script>
import AdderssMenu from './AdderssMenu.vue'
import ServeMenu from './ServeMenu.vue'
import ProDuct from '../components/ProDuct.vue'
export default {
   props: {
    autoplay: Number,
    indicatorColor: String,
    swiperList: Array
  },
 data() { 
   return {
     
     swiperList: [
       {
         id:1,
         src:"https://z1.muscache.cn/im/pictures/f9bb3186-87c1-4ca8-9f10-c077454b2656.jpg?aki_policy=large"
       },
       {
         id:2,
         src:"https://z1.muscache.cn/im/pictures/42ae266d-9106-42e7-aa9f-81824673c355.jpg?aki_policy=large"
       },
       {
         id:3,
         src:"https://z1.muscache.cn/im/pictures/7355e856-bfba-4919-bf36-4987ab86c784.jpg?aki_policy=large"
       },
       {
         id:4,
         src:"https://z1.muscache.cn/im/pictures/miso/Hosting-44299372/original/6bceddc7-a72b-4ed8-a6d5-3d141bb9d7ab.jpeg?aki_policy=large"
       },
       {
         id:5,
         src:"https://z1.muscache.cn/im/pictures/miso/Hosting-46226954/original/cad7285d-5804-4478-8438-0e3a9a9955e5.jpeg?aki_policy=large"
       }
     ]
   };
 },
 components: {
    AdderssMenu,
   ServeMenu,
  ProDuct
 }
}
</script>
<style lang='less' scoped>
 // 首页轮播图
.my-swipe{
  
 .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    height: 363px;
    text-align: center;
    background-color: #39a9ed;
  img{
    width: 100%;
    height: 100%;
     }
    }
  }
  
  // 首页搜索栏
  .van-search{
    position: absolute;
    z-index: 999;
    width: 100%;
    color: #fff;
  }
  .van-search__content{
    background: rgba(255,255,255,.2);
  }
  .van-cell{
    color: #fff
  }
</style>