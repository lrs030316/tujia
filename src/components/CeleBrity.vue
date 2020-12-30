<template>
<div class="wrapp">
     <p class="mate">网红美宿</p>
     <p class="sm-mate">随手一拍都是大片</p>
   <div class="discount">
     <div class="ds-1">
       <span class="day">#必睡精选#</span>
       <span class="house">致敬设计师，优选pro美宿大赏</span>
       <img src="../assets/syimg/wh1.png" alt="">
     </div>
     <div class="ds-2">
       <div class="ds-2-1" v-for="(item, index) in houseList" :key="index">
          <span class="count item">住入惊喜夜</span>
         <img src="../assets/syimg/wh2.png" alt="">
       </div>
       <div class="ds-2-1">
          <span class="count">必睡精选</span>
         <img src="../assets/syimg/wh3.png" alt="">
       </div>
       <div class="ds-2-1">
          <span class="count">小众秘境</span>
         <img src="../assets/syimg/wh4.png" alt="">
       </div>
       <div class="ds-2-1">
          <span class="count">去逛逛></span>
         <img src="../assets/syimg/wh5.png" alt="">
       </div>  
   </div>
  </div>
 </div>
</template>

<script>
export default {
 data() {
   return {};
 }
};
</script>
<style lang='less' scoped>
.wrapp {
  padding:0 17px;
  .mate {
    width: 84px;
    font-size: 21px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #000000;
    line-height: 23px;

  }
  .sm-mate {
    font-size: 11px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #666666;
    line-height: 28px;

  }
  .discount {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .ds-1{
      position: relative;
      .day {
        display: block;
        position: absolute;
        bottom: 26px;
        left: 4px;
        width: 90px;
        height: 20px;
        background: #FFFFFF;
        border-radius: 10px;
        width: 67px;
        text-align: center;
        font-size: 12px;
        font-weight: bold;
        color: #333333;
        line-height: 20px;
      }
      .house {
        position: absolute;
        bottom: 4px;
        left: 13px;
        width: 185px;
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #ccc;
        line-height: 23px;
      }  
    >img {
      width: 250px;
      margin-right: 5px;
     }
    }
    .ds-2{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
         img {
           width: 83px;
           height: 55px;
          }
          .ds-2-1 {
            position: relative;
            .count {
              position: absolute;
              left: 22px;
              top: 17px;
              height: 11px;
              font-size: 11px;
              font-family: PingFang SC;
              font-weight: bold;
              color: #ccc;
              line-height: 23px;
            }
            .item {
              position: absolute;
              left: 12px;
              top: 17px;
            }
          }
        
     }    
    }
  }
</style>
