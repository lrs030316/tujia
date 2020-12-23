<template>
  <div class="serve-menu">
      <div class="member">
        <i></i>
        <p>周三会员日，99元全国随心住</p>
        <div class="coupon">立即抢</div>
      </div>
      <div class="shoping-menu">
        <ul class="menu">
          <li
          v-for="(item,index) in title"
          :key="index"
          >
          <!-- <img :src="item.imgUrl" alt=""> -->
          {{ item.nam}}
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
 data() {
   return {
     title:[
       {
         
         nam:"天天特惠"
       },
       {
         
         nam:"会员日"
       },
       {
         
         nam:"超值好房"
       },
       {
         
         nam:"每周上新"
       },
       {
         
         nam:"实拍美屋"
       },
       {
         
         nam:"新奇体验"
       },
       {
        
         nam:"品牌民宿"
       },
       {
         
         nam:"精挑细选"
       },
       {
         
         nam:"浪漫约会"
       },
       {
         
         nam:"整套出租"
       }
     ]
   };
 },

};
</script>
<style lang='less' scoped>
.serve-menu{
  padding: 0 18px ;
  height:230px;
  background: green;
  padding-top:110px ;
 
  .member{
    height: 50px;
    border-radius:10px;
    // margin-top: 110px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: pink;
    .coupon{
      width: 60px;
      height: 20px;
      border-radius: 10px;
       background: red;
    }
  }
  .shoping-menu{
    height: 164px;
    width: 100%;
    background: grey;
    .menu{
     height: 100%;
     width: 100%;
     display: flex;
     justify-content: space-around;
     flex-wrap: wrap;
     li{
       height: 50%;
       width: 20%;
       display: flex;
       align-items: center;
       justify-content: center;
     }
    }
  }
}
</style>
