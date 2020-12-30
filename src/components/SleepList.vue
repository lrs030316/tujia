<template>
 <div class="wrapp">
     <p class="mate">必睡清单</p>
     <p class="sm-mate">10秒找到心仪名宿</p>
     <div class="kd">
       <div class="kd-mate">
       <img src="../assets/syimg/bs1.png" alt="">
       <span class="v-mate">#北京民宿口碑榜</span>
        <div class="num-star"><img class="star" src="../assets/syimg/bs2.png" alt="">
        <span class="text">488</span>
        </div>
      </div>
    </div>
   <div class="discount">
     <div class="ds-1">
       <span class="house"><img src="../assets/syimg/bs6.png" alt=""><div class="text">33012正在关注</div></span>
       <img src="../assets/syimg/bs3.png" alt="">
     </div>
     <div class="ds-2">
       <div class="ds-2-1">
          <span class="count item"></span>
         <img src="../assets/syimg/bs4.png" alt="">
       </div>
       <div class="ds-2-1">
         <img src="../assets/syimg/bs5.png" alt="">
       </div> 
   </div>
  </div>
 </div>
</template>

<script>
export default {
 data() {
   return {};
 },

 components: {},

 computed: {},

 mounted() {},

 methods: {}
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
  .kd {
    height: 45px;
    border-top:3px solid #eee ;
    border-left:3px solid #eee ;
    border-right:3px solid #eee ;
    border-radius: 10px 10px 0 0;
    .kd-mate {
        position: relative;
        .v-mate {
          position: absolute;
          top: 14px;
          left: 11px;
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #FFFFFF;
        }
        .num-star{
           height: 30px;
           float: right;
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           margin-right: 6px;
           
        .star {
          width: 22px;
          height: 22px;
         }
         .text {
            width: 18px;
            height: 6px;
            font-size: 6px;
            color: #999999;
         }
        }
      img {
        width: 119px;
        height: 30px;
        margin-top: 8px;
      }
    }
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
        bottom: 14px;
        left: 28px;
        width: 185px;
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #ccc;
        .text {
          height: 22px;
          display: inline-block;
          vertical-align: bottom;
        }
       
        img {
          width: 22px;
          height: 22px;
        }
      }  
    >img {
      width: 245px;
      margin-right: 5px;
     }
    }
    .ds-2{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
         img {
           width: 90px;
           height: 80px;
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
