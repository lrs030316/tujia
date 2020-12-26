<template>
  <div class="headbox">
    <router-link to="enshrine">我的收藏</router-link>
    <router-link to="browse">浏览历史</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
export default {

}

</script>

<style lang="less" scoped>
  .headbox {
    margin: 20px 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      display: block;
      width: 80px;
      height: 22px;
    }
  }
  .van-dropdown-menu__title {
    font-size: 12px;
    color: red;
  }
  .van-cell {
    margin-top: 15px;
  }
  .van-cell__value{
    width: 100%;
    height: 20px;
  }
  .van-cell__value span{
    font-size: 8px;
  }
  .van-cell__title{
    width: 0;
  }
  .van-swipe{
    width: 100%;
  }
  .van-swipe-item{
    width: 100%;
  }
  .van-swipe__indicators{
    bottom: 6%;
  }
</style>