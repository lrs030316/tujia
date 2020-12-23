<template>
<<<<<<< HEAD
  <div id="app">
    <router-view />
  </div>
=======
  <header>
    <van-nav-bar title="发现" />
  </header>
  <main>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </main>
>>>>>>> zz
</template>

<script lang="ts">
import { Toast } from 'vant';

export default  ({
  
//  data() {
 
//  },
 setup() {
   
    },
   
  methods: {
}
})
</script>
<style lang="less">
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
.van-swipe{
  
  border-radius:6px !important ;
}
</style>