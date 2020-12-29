<template>
  <div>
    <van-nav-bar title="发现">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
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
</style>