<template>
     <div class="locate">
        <p>泰国</p> <div class="locate-g"><p>当前位置</p><img src="../../syimg/sy2.png" alt=""></div>
      </div>
      <div class="wrapp">
      <div class="date">
        <div class="date-1"><span class="item">入住</span><span class="itemv">12月7日</span ></div><div class="date-1"><span class="item">离店</span><span class="itemv">12月8日</span></div><div class="date-1"><span class="item">入数</span><span class="itemv">不限</span></div>
      </div>
      <p class="search">关键字/位置/民宿名</p>
      <p class="search"><span>芭提雅</span><span>曼谷/月宫/普吉岛</span><span>大佛塔</span></p>
      <p class="search"><span>玉佛寺/湄南河</span><span>金沙岛</span><span>大皇宫</span><span>海淀区</span></p>
      <div class="search-button">开始搜索</div>
      </div>
      <div class="serves"><i><img src="../../syimg/sy3.png" alt=""></i><p>信用住.先住后付</p><i><img src="../../syimg/fy.png" alt=""></i><p>24小时客服</p><i><img src="../../syimg/kf.png" alt=""></i><p>房源房东真实认证</p></div>
      <div class="stage">全国旅游投诉平台:www.12301.cn</div>
</template>

<script>
export default {
 data() {
   return {};
 }
};
</script>
<style lang='less' scoped>
.locate {
      height: 35px;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      
      .locate-g{
        display: flex;
        justify-content: space-around;
        align-items: center;
      img {
         width: 22px;
         height: 22px;
        }
       }
      }
   .wrapp{
     margin: 0 20px;
    .date{
        display: flex;
        justify-content: space-around;
        align-items: center;
        .date-1{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }      
        }
        .item {
          font-size: 10px;
          height: 20px;
          
        }
        .itemv {
          font-size: 15px;
          height: 15px;
         
        }
      .search {
        font-size: 12px;
        color: #666;
        span {
          height: 21px;
          background: #F1F2F4;
          border-radius: 11px;
          margin-right: 3px;
        } 
      }
      .search-button {
        height: 38px;
        background: #EB9842;
        border-radius: 19px;
        font-size: 16px;
        text-align: center;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 38px;

       }
      }
    .serves {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;       
        color: #A4A4A4;
        img {
         width: 22px;
         height: 22px;
        }
      }
  .stage { 
    font-size: 10px;
    font-weight: 500;
    text-align: center;
    color: #A4A4A4;
     }
</style>
