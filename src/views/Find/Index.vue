<template>
  <div class="findhead">
    <div class="findhead1">
      <h2>发现</h2>
      <div class="anniu">杭州</div>
      <img src="../../assets/imgers/Find/stop.png" alt="">
    </div>
    <img class="findhead2" src="../../assets/imgers/Find/find.png" alt="">
  </div>
  <div class="indeximg">
    <van-swipe :autoplay="3000" lazy-render >
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
  <div class="routeBox">
    <router-link tag="div" class="child" to="Select">精选</router-link>
    <router-link tag="div" class="child" to="Hotlist">收藏热榜</router-link>
    <router-link tag="div" class="child" to="Homestay">名宿片场</router-link>
    <router-link tag="div" class="child" to="Parentsroom">亲子好房</router-link>
    <router-link tag="div" class="child" to="Goout">出去嗨</router-link>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
export default {
  setup() {
    const images = [
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg',
    ];
    return { images };
  },
}
</script>

<style lang="less">
  .routeBox {
    width: 100%;
    height: 40px;
    display: flex;
    align-content: center;
    justify-content: space-evenly;
    .child {
      line-height: 40px;
    }
    .router-link-active {
      color: orange;
    }
  }
  .indeximg{
    padding-left: 19px;
  }
  img{
    width: 338px;
    height: 165px;
  }
  .van-swipe__indicators {
    bottom: 10%;
  }
  .findhead{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 30px;
    width: 100%;
    margin-top: 22px;
  }
  .findhead .findhead1{
    width: 100%;
    height: 30px;
    align-self: flex-start;
  }
  .findhead .findhead1 h2{
    margin: 3px 8px 4px 18px;
    width: 46px;
    height: 23px;
    font-size: 20px;
  }
  .findhead .findhead1 .anniu{
    width: 49px;
    height: 12px;
    margin-top: 13px;
    margin-bottom: 6px;
  }
 .findhead .findhead1 img{
   width: 22px;
   height: 22px;
   margin-top: 13px;
 } 
  .findhead .findhead2{
    width: 22px;
    height: 22px;
    margin-right: 19px;
  }
</style>