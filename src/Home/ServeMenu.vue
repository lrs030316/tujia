<template>
  <div class="product">
  <div class="serve-menu">
      <div class="member">
        <i><img src="../assets/syimg/mm1.png" alt=""></i>
        <p>周三会员日，99元全国随心住</p>
        <div class="coupon">立即抢</div>
      </div>
      <div class="shoping-menu">
        <ul class="menu">
          <li
          v-for="(item,index) in title"
          :key="index"
          >
          <img :src="item.imgUrl" alt="">
          <span>{{ item.nam }}</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
</template>

<script>
export default {
 data() {
   return {
     title:[
       {
         imgUrl:"../../hsimg/mn1.png",
         nam:"天天特惠"
       },
       {
         imgUrl:"../../hsimg/mn2.png",
         nam:"会员日"
       },
       {
         imgUrl:"../../hsimg/mn3.png",
         nam:"超值好房"
       },
       {
         imgUrl:"../../hsimg/mn4.png",
         nam:"每周上新"
       },
       {
         imgUrl:"../../hsimg/mn5.png",
         nam:"实拍美屋"
       },
       {
         imgUrl:"../../hsimg/mn6.png",
         nam:"新奇体验"
       },
       {
         imgUrl:"../../hsimg/mn7.png",
         nam:"品牌民宿"
       },
       {
         imgUrl:"../../hsimg/mn8.png",
         nam:"精挑细选"
       },
       {
         imgUrl:"../../hsimg/mn9.png",
         nam:"浪漫约会"
       },
       {
         imgUrl:"../../hsimg/mn10.png",
         nam:"整套出租"
       }
     ]
   };
 },
 components: {
 }

};
</script>
<style lang='less' scoped>
.product {
  padding-top:100px ;
.serve-menu{
  padding: 0 18px ;
  height:230px;
  background: #fff;
  .member{   
    height: 50px;
    background: #FBF1F1;
    border-radius: 6px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    img {
      width: 46px;
      height: 46px;
    }
    p {
      font-size: 14px;
      font-weight: 500;     
      color: #4E2824;
    }
    .coupon{
      width: 55px;
      height: 21px;
      background: #EC706B;
      border-radius: 10px;
      font-size: 13px;
      text-align: center;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 21px;
    }
  }
  .shoping-menu{
    margin-top: 27px;
    height: 164px;
    width: 100%;
    background: #fff;
    .menu{
     height: 100%;
     width: 100%;
     display: flex;
     justify-content: space-around;
     flex-wrap: wrap;
     li{
       width: 20%;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: space-evenly;
       font-size: 11px;
       padding: 10px 0;
       font-weight: 500;
       color: #000000;
       img {
         width: 32px;
         height: 32px;
       }

     }
    }
  }
 }
}
</style>
