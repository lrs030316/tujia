<template>
   <!-- <van-empty 
    description="房东页面" 
    class="custom-image"
    image="https://img.yzcdn.cn/vant/custom-empty-image.png">
    <van-button round type="danger" class="bottom-button">按钮</van-button>
  </van-empty> -->
  <header>
    <div class="land">
      <img :src="imgUre" alt="">
      <div>
        <h2>暖暖的糖</h2>
        <h4>个人房东 芝麻认证 芝麻信用731分</h4>
      </div>
      <div></div>
    </div>
    <hr>
  </header>
  <main>
    <h3>热门房源</h3>
    <span>(北京)</span>
  </main>
  
</template>

<script >
import imgUre from "../../../assets/imgers/Collect/Head portrait-1.png";
export default {
  data() {
    return{
      imgUre:imgUre
    }
  }
}
</script>

<style lang="less" scoped>
  // .custom-image .van-empty__image {
  //   width: 90px;
  //   height: 90px;
  // }
  // .bottom-button {
  //   width: 160px;
  //   height: 40px;
  // }
  .land {
    display: flex;
    
  }
</style>