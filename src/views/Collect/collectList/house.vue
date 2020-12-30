<template>
  <header class="house">
    <div class="titleTo">
      <div class="buttonTo" @click="country">全部城市</div>
      <img src="../../../assets/imgers/Collect/stop.png" alt="">
      <div class="buttonto" @click="calendar">12.31-1.1</div>
      <img src="../../../assets/imgers/Collect/stop.png" alt="">
    </div>
  </header>
  <main>
    <swipe-house />
  </main>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import swipeHouse from '../../../components/SwipeHouse.vue';

export default {
  
  setup() {
    const router = useRouter();
    const country = ()=>{
      router.push("/Country")
    };
    const Calendar = ()=>{
      router.push("/Calendar")
    };
    return { 
      country,
      Calendar,
      
    }
  },
  components: {
    swipeHouse
  }
}
</script>

<style lang="less" scoped>
// @import "../../../assets/less/collect.less";
.van-dropdown-menu__title {
  color: red;
}
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  header{
    height: 36px;
  }
  header .van-dropdown-menu{
    width: 20%;
    float: left;
  }
  header .van-cell{
    width: 20%;
    float: left;
    font-size: 12px;
  }
  .titleTo{
    position: relative;
    width: 100%;
    height: 22px;
    margin-left: 19px;
  }
  .titleTo .buttonTo{
    width: 53px;
    height: 13px;
    font-size: 13px;
    float: left;
  }
  .titleTo img{
    float: left;
    width: 22px;
    height: 22px;
  }
  .titleTo .buttonto {
    margin-left: 22px;
    width: 69px;
    height: 10px;
    font-style: 10px;
    float: left;
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
</style>