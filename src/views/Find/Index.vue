<template>
  <div class="findhead">
    <div class="findhead1">
      <h2>发现</h2>
      <div class="anniu" @click="findcountry">全部城市</div>
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
      'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=775075043,1745194499&fm=173&app=25&f=JPEG?w=640&h=429&s=9121F51766511BCE10A4A931030060E1g',
      'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1184427814,3329977983&fm=173&app=25&f=JPEG?w=550&h=412&s=CD7028C19C101E4F14387C910300C090',
      'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3385133125,2629336663&fm=173&app=25&f=JPEG?w=640&h=532&s=7990CF1156487F45467458C40300E0A0',
      'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2198283147,74725725&fm=173&app=25&f=JPEG?w=640&h=427&s=21B35F95A6174BDA5C21BCD10300D033',
      'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=942292108,226793237&fm=173&app=25&f=JPEG?w=640&h=304&s=B2022EEB041259D20E05C5380300C052'
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
    position: relative;
    height: 30px;
    width: 100%;
    margin-top: 22px;
  }
  .findhead .findhead1{
    float: left;
    width: 327px;
    height: 30px;


  }
  .findhead .findhead1 h2{
    float: left;
    margin: 3px 8px 4px 18px;
    width: 46px;
    height: 23px;
    font-size: 20px;
  }
  .findhead .findhead1 .anniu{
    float: left;
    // width: 49px;
    height: 12px;
    margin-top: 13px;
    margin-bottom: 6px;
  }
 .findhead .findhead1 img{
   float: left;
   width: 22px;
   height: 22px;
   margin-top: 13px;
 } 
  .findhead .findhead2{
    float: right;
    width: 22px;
    height: 22px;
    margin-right: 19px;
  }
</style>