<template>

   <!-- <van-empty 
    description="房东页面" 
    class="custom-image"
    image="https://img.yzcdn.cn/vant/custom-empty-image.png">
    <van-button round type="danger" class="bottom-button">按钮</van-button>
  </van-empty> -->
  <header>
    <div class="land">
      <img class="land-img" :src="imgUre" alt="">
      <div class="land-text">
        <h2>暖暖的糖</h2>
        <h4>个人房东 芝麻认证 芝麻信用731分</h4>
      </div>
      <div class="landto">></div>
    </div>
    <hr>
  </header>
  <main>
    <div class="maintext">
      <h3>热门房源</h3>
      <span>(北京)</span>
    </div>
    
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
    position: relative;
    width: 100%;
    height: 45px;
    margin-bottom: 22px;
    margin-top: 24px;
  }
  .land .land-img{
    float: left;
    width: 45px;
    height: 45px;
    margin-left: 18px;
  }
  .land .land-text{
    float: left;
    width: 173px;
    height: 36px;
    margin-top: 3px;
    margin-left: 14px;
    margin-bottom: 6px;
      h2{
        font-size: 15px;
        color: #303030;
        width: 60px;
        height: 15px;
      }
      h4{
        font-size: 11px;
        color: #686868;
        width: 100%;
        height: 11px;
        margin-top: 11px;
      }
  }
  .land .landto{
    float: right;
    margin-right: 17px;
    width: 5px;
    height: 9px;
    color: #666;
  }
  hr{
    margin-left: 20px;
    margin-right: 17px;
  }
  .maintext{
    position: relative;
    width: 98px;
    height: 15px;
    margin-top: 12px;
    margin-left: 20px;
  }
  .maintext h3{
    width: 65px;
    height: 15px;
    float: left;
    font-size: 15px;
  }
  .maintext span{
    float: left;
    margin-top: 3px;
    height: 12px;
    width: 33px;
    font-size: 5px;
  }
</style>