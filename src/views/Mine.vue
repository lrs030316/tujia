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

      <ul class="hb">
        <li>
          <a href="">红包</a>
          <span>0个</span>
        </li>
        <li>
          <a href="">积分商城</a>
          <span>0分</span>
        </li>
        <li>
          <a href="">余额</a>
          <span>￥0</span>
        </li>
      </ul>

      <div class="dd">
        <span>我的订单</span>
        <a href="">
          查看全部
          <van-icon name="arrow" color="#707070" />
        </a>
      </div>
    </div>

    <div class="lbt">
      <img src="../assets/image/mineimg/banner.png" alt="">
    </div>

    <ul class="cygn">
      <li>
        <a href="">
          <img src="../assets/image/mineimg/content.png" alt="">
          <span class="big">内容管理</span>
          <span class="small">途中故事</span>
        </a>
      </li>
      <li>
        <a href="">
          <img src="../assets/image/mineimg/see.png" alt="">
          <span class="big">浏览历史</span>
          <span class="small"></span>
        </a>
      </li>
      <li class="yb">
        <a href="">
          <img src="../assets/image/mineimg/cyinfo.png" alt="">
          <span class="big">常用信息</span>
          <span class="small">入住人/地址</span>
        </a>
      </li>
      <li>
        <a href="">
          <img src="../assets/image/mineimg/money.png" alt="">
          <span class="big">开具发票</span>
          <span class="small">历史发票</span>
        </a>
      </li>
      <li>
        <a href="">
          <img src="../assets/image/mineimg/invite.png" alt="">
          <span class="big">邀请好友</span>
          <span class="small">邀请好友得奖励</span>
        </a>
      </li>
      <li class="yb">
        <a href="">
          <img src="../assets/image/mineimg/online.png" alt="">
          <span class="big">在线客服</span>
          <span class="small">24H服务</span>
        </a>
      </li>
      <li>
        <a href="">
          <img src="../assets/image/mineimg/card.png" alt="">
          <span class="big">卡包</span>
          <span class="small">途游卡</span>
        </a>
      </li>
      <li>
        <a href="">
          <img src="../assets/image/mineimg/safe.png" alt="">
          <span class="big">安全中心</span>
          <span class="small"></span>
        </a>
      </li>
      <li>
        <a href="">
          <img src="../assets/image/mineimg/manage.png" alt="">
          <span class="big">托管加盟</span>
          <span class="small">房屋托管经营</span>
        </a>
      </li>
      <li>
        <a href="">
          <img src="../assets/image/mineimg/advice.png" alt="">
          <span class="big">意见反馈</span>
          <span class="small"></span>
        </a>
      </li>
    </ul>

    <van-button class="zq" type="primary" size="large" round>我想当房东赚钱</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    };
  },

  components: {},

  computed: {},

  mounted () { },

  methods: {}
};
</script>

<style lang='less' scoped>
.top {
  width: 100%;
  height: 251px;
  position: relative;
  img {
    width: 100%;
    height: 73%;
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
  a {
    width: 20px;
    height: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.mine {
  width: 80px;
  height: 18px;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 9px;
  position: absolute;
  top: 80px;
  left: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  img {
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
  background: #6b7075;
  border-radius: 50%;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);
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
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 127px;
  left: 19px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}

.hb {
  width: 220px;
  height: 44px;
  position: absolute;
  top: 152px;
  left: 121px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    display: flex;
    flex-direction: column;
    a {
      font-family: PingFang-SC-Bold;
      color: #666666;
      font-size: 12px;
      margin-bottom: 8px;
    }
    span {
      font-family: PingFang-SC-Bold;
      font-size: 14px;
      color: #000;
      text-align: center;
      font-weight: bold;
    }
  }
}
.dd {
  width: 337px;
  height: 16px;
  position: absolute;
  bottom: 10px;
  padding: 0 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: PingFang-SC-Bold;
  span {
    font-size: 16px;
    font-weight: Bold;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #666666;
  }
}

.lbt {
  width: 100%;
  height: 88px;
  background: #f7f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 340px;
    height: 63px;
  }
}

.cygn {
  width: 275px;
  margin: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  li {
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
      }
      .big {
        margin-top: 8px;
        font-size: 12px;
        color: #303030;
      }
      .small {
        height: 10px;
        font-size: 10px;
        color: #999999;
        margin-top: 5px;
      }
    }
  }
  .yb {
    margin-right: none;
  }
}
.zq {
  width: 245px;
  height: 38px;
  margin-left: 64px;
  color: #434343;
  font-size: 14px;
  background: #F4F5F7;
  border: none;
}

</style>
