<template>
   <van-empty 
    description="房东页面" 
    class="custom-image"
    image="https://img.yzcdn.cn/vant/custom-empty-image.png">
    <van-button round type="danger" class="bottom-button">按钮</van-button>
  </van-empty>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="less" scoped>
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
  .bottom-button {
    width: 160px;
    height: 40px;
  }
</style>