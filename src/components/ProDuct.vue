<template>
 <div class="wrapp">
   <p class="mate">超值特惠</p>
   <p class="sm-mate">限时折扣，手快有，手慢无</p>
   <div class="discount">
     <div class="ds-1">
       <span class="day count">天天特惠</span>
       <span class="reserve house">特惠房源抢先订</span>
       <span class="discount pre">6折起</span>
       <img src="../assets/syimg/ds1.png" alt="">
       </div>
     <div class="ds-2">
       <i class="ds-2-1">
          <span class="day down">新手立减</span>
          <span class="reserve newp">新手专属特惠房源</span>
          <span class="discount fto">6折起</span>
         <img src="../assets/syimg/ds2.png" alt=""></i>
       <i class="ds-2-2">
          
        <div class="ds-2-2-1 disdance">
           <span class="day ">今日甩卖</span>
           <span class="reserve ">预定今晚</span>
           <span class="discount ">6折起</span>
           <img src="../assets/syimg/ds3.png" alt="">
        </div>
        <div class="ds-2-2-1">
           <span class="day">新房特惠</span>
           <span class="reserve">抢先体验</span>
           <span class="discount">6折起</span>
           <img src="../assets/syimg/ds4.png" alt="">
         </div>
       </i>
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
  padding:0 17px ;
  background: #fff;
  width: 100%;
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
    width: 100%;
    height: 155px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .ds-1{
      width: 174px;
       position: relative;
      .day {
        width: 72px;
        height: 17px;
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #000000;
        line-height: 28px;
      }
        .reserve {
          height: 10px;
          font-size: 10px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #666666;
          line-height: 28px;
        }
        .discount {
          display: block;
          width: 40px;
          height: 15px;
          background: #E06A70;
          border-radius: 8px;
          font-size: 8px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #FFFFFF;
          text-align: center;
          line-height: 15px;
  
        }
      .count {
        position: absolute;
        top: 25px;
        left: 18px;
      }
      .house {
        position: absolute;
        top: 50px;
        left: 18px;
      }
      .pre {
        position: absolute;
        top: 124px;
        left: 24px;
      }
      

    
      >img {
        width: 165px;
        height: 100%;
        margin-right: 9px;
      }
    }
    .ds-2{
      width: 167px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
         .ds-2-1{
           width: 100%;
           position: relative;
           .down {
                position: absolute;
                top: 19px;
                left: 11px;
              }
            .newp {
              position: absolute;
              top: 42px;
              left: 9px;
            }
            .fto {
              position: absolute;
              top: 48px;
              left: 110px;
            }
             .day {
                width: 72px;
                height: 17px;
                font-size: 18px;
                font-weight: bold;
                color: #000000;
                line-height: 28px;
              }
              .reserve {
                height: 10px;
                font-size: 10px;
                font-weight: 500;
                color: #666666;
                line-height: 28px;
              }
              .discount {
                display: block;
                width: 40px;
                height: 15px;
                background: #E06A70;
                border-radius: 8px;
                font-size: 8px;
                font-weight: 500;
                color: #FFFFFF;
                text-align: center;
                line-height: 15px;
        
              }
         
         >img {
           width: 100%;
             height: 75px;
          }
        }
          .ds-2-2{
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 8px;
              
          >.ds-2-2-1{
            width: 80px;
             position: relative;
             .day {
                position: absolute;
                top: 14px;
                left: 9px;
                font-size: 10px;
                font-weight: 700;
                color: #000000;
                
              }
              .reserve {
                position: absolute;
                top: 28px;
                left: 9px;
                font-size: 10px;
                color: #666666;
              }
              .discount {
                position: absolute;
                top: 52px;
                left: 15px;
                display: block;
                text-align: center;
                line-height: 13px;
                font-size: 8px;
                font-weight: 500;
                color: #FFFFFF;
                width: 50px;
                height: 13px;
                background: #BA955D;
                border-radius: 5px;
              }
            >img{
              width: 100%;
              height: 70px;
           } 
          }
          >.disdance>img{
            margin-right: 6px;
           } 
          }
          >img {
            width: 165px;
            height: 100%;
          }
    }
  }
}
</style>
