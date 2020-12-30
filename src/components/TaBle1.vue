<template>
     <div class="locate">
        <p @click="goToCities">{{ city.name }}</p> <div class="locate-g"><p>当前位置</p><img src="../assets/syimg/sy2.png" alt=""></div>
      </div>
      <div class="wrapp">
        <div class="prevent">
          <span class="item">选择日期</span>
          <span class="item">入住</span>
          <span class="item live">离店</span>
          <div class="date-1">
            <span class="item">入数</span>
            <span class="itemv">不限</span>
          </div>
       </div>
       <div class="date">
          <van-cell title="选择入住区间" :value="date" @click="show = true" />
          <van-calendar v-model:show="show" type="range" @confirm="onConfirm" />    
      </div>
      <p class="search ms">关键字/位置/民宿名</p>
      <p class="search"><span>天安门广场</span><span>天安门/王府井地区</span><span>朝阳区</span></p>
      <p class="search"><span>后海/南铜锣巷地区</span><span>三里屯</span><span>故宫</span><span>海淀区</span></p>
      <div class="search-button">开始搜索</div>
      </div>
      <div class="serves"><i><img src="../assets/syimg/sy3.png" alt=""></i><p>信用住.先住后付</p><i><img src="../assets/syimg/fy.png" alt=""></i><p>24小时客服</p><i><img src="../assets/syimg/kf.png" alt=""></i><p>房源房东真实认证</p></div>
      <div class="stage">全国旅游投诉平台:www.12301.cn</div>
</template>

<script>
import { ref } from 'vue';

export default {

setup() {
    const date = ref('');
    const show = ref(false);

    const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
    const onConfirm = (values) => {
      const [start, end] = values;
      show.value = false;
      date.value = `${formatDate(start)} - ${formatDate(end)}`;
    };

    return {
      date,
      show,
      onConfirm,
    };
  },

 data() {
   return {};
 },
 computed:{
    city() {
      return this.$store.state.city;
    }
 },
 methods: {
   goToCities() {
     this.$router.push("/cities");
     
   }
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
    .prevent{
        height: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
        .live {
          margin-right: 40px;
        }
        .date-1{
          height: 50px;
          position: absolute;
          top: 0;
          right: 0;
          z-index: 99;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .itemv {
            margin-top: 16px;
          }
        }
        .leave {
          width: 100px;
          height: 100%;
          background: green;
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
        .ms {
          margin-top: 7px;
        }
      .search {
        font-size: 12px;
        color: #666;
        margin-bottom: 7px;
        span {
          display: inline-block;
          height: 20px;
          background:#F1F2F4;
          border-radius: 11px;
          margin-right: 5px;
          text-align: center;
          line-height: 26px;
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
        margin-top: 10px;
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
    margin-top: 10px;
    font-size: 10px;
    font-weight: 500;
    text-align: center;
    color: #A4A4A4;
     }
</style>
