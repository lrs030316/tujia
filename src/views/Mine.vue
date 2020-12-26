<template>
 <div>
    <div class="top">
      <img src="../assets/image/mineimg/topbg.png" alt="">

      <div class="nc">
        <span>遇见温柔风.</span>
        <a href="">
          <img src="../assets/image/mineimg/sz.png" alt="">
        </a>
      </div>

      <div class="mine">
        <img src="../assets/image/mineimg/pthy.png" alt="">
        <span>普通会员</span>
        <i class="iconfont icon-arrow-right"></i>
      </div>

      <div class="xyrz">
        <span>通过信用认证，可享信用免押金</span>
        <i class="iconfont icon-arrow-right"></i>
      </div>

      <div class="bj">
        <img src="../assets/image/mineimg/bj.png" alt="">
      </div>

      <div class="tx">
        <img src="../assets/image/mineimg/tx.png" alt="">
      </div>
      
    </div>
    
   
   <div class="lbt"></div>
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
.top {
  width: 100%;
  height: 251px;
  position: relative;
  img{
    width: 100%;
    height: 75%;
  }
}
.nc {
  width: 319px;
  height: 20px;
  position: absolute;
  top: 46px;
  padding: 0 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: #fff;
    font-size: 18px;
    letter-spacing: 1px;
  }
  a{
    width: 20px;
    height: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.mine{
  width: 80px;
  height: 18px;
  background: rgba(255, 255, 255,0.3);
  border: none;
  border-radius: 9px;
  position: absolute;
  top: 80px;
  left: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  img{
    margin-left: 8px;
    width: 12px;
    height: 15px;
    margin-right: 2px;
  }
  span {
    font-size: 12px;
    line-height: 18px;
  }
  .icon-arrow-right {
    font-size: 4px;
  }
}
.xyrz {
  position: absolute;
  top: 80px;
  left: 115px;
  color: #fff;
  span {
    font-size: 11px;
  }
  .icon-arrow-right {
    font-size: 4px;
  }
}

.bj {
  width: 50px;
  height: 50px;
  background: #6B7075;
  border-radius: 50%;
  box-shadow:0 0 10px 5px rgba(0, 0, 0,0.3);
  position: absolute;
  top: 86px;
  right: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 28px;
    height: 28px;
  }
}
.tx {
  width: 74px;
  height: 74px;
  border-radius: 50%;
  box-shadow:0 0 20px 5px rgba(0, 0, 0,0.3);
  position: absolute;
  top: 127px;
  left: 19px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}


.lbt {
  width: 100%;
  height: 88px;
  background:rgb(161, 13, 13);
}
</style>
