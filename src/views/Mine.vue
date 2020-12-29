<template>
  <div>
    <div class="top">
      <img src="../assets/image/mineimg/topbg.png" alt="">

      <!-- 登录注册入口 -->
      <div class="nc">
        <span>注册/登录</span>
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

      <!-- 头像 -->
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

    <div class="testbig">
      <div class="test" v-for="(value,index) in tabs" :key="index">
        <van-grid :border="false" :column-num="3" >
          <van-grid-item :to="value.path">
            <img :src="value.img" alt="" style="width:30px;height:30px;">
          </van-grid-item>
          <span class="big">{{value.name}}</span>
          <span class="small" v-if="value.small">
            {{ value.small }}
          </span>
        </van-grid>
      </div>
    </div>
  
    <van-button class="zq" type="primary" size="large" round>我想当房东赚钱</van-button>
  </div>
</template>

<script>
export default {

  data () {
    return {
      tabs: [
        {
          img: 'http://10.31.162.29:4000/mine/content.png',
          name: '内容管理',
          small: '途中故事',
          path: '/commoninfo'
        },
        {
          img: 'http://10.31.162.29:4000/mine/see.png',
          name: '浏览历史',
          small: '   ',
          path: '/commoninfo'
        },
        {
          img: 'http://10.31.162.29:4000/mine/info.png',
          name: '常用信息',
          small: '入住人/地址',
          path: '/commoninfo'
        },
        {
          img: 'http://10.31.162.29:4000/mine/money.png',
          name: '开具发票',
          small: '历史发票',
          path: '/commoninfo'
        },
        {
          img: 'http://10.31.162.29:4000/mine/invite.png',
          name: '邀请好友',
          small: '邀请好友得奖励',
          path: '/commoninfo'
        },
        {
          img: 'http://10.31.162.29:4000/mine/online.png',
          name: '在线客服',
          small: '24H服务',
          path: '/commoninfo'
        },
        {
          img: 'http://10.31.162.29:4000/mine/card.png',
          name: '卡包',
          small: '途游卡',
          path: '/commoninfo'
        },
        {
          img: 'http://10.31.162.29:4000/mine/safe.png',
          name: '安全中心',
          small: '    ',
          path: '/commoninfo'
        },
        {
          img: 'http://10.31.162.29:4000/mine/manage.png',
          name: '托管加盟',
          small: '房屋托管经营',
          path: '/commoninfo'
        },
        {
          img: 'http://10.31.162.29:4000/mine/advice.png',
          name: '意见反馈',
          small: '    ',
          path: '/commoninfo'
        }
      ]
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

.testbig {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  flex-wrap: wrap;
  margin: 0;
  .test {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .van-grid {
      display: flex;
      flex-direction: column;
      align-items: center;
      .van-grid-item {
        width: 30px;
        height: 30px;
        margin-bottom: 8px;
        margin-top: 10px;
      }
      .big {
        font-size: 12px;
        color: #303030;
      }
      .small {
        text-align: center;
        width: 70px;
        height: 10px;
        font-size: 10px;
        color: #999999;
        margin-top: 5px;
      }
    }
  }
}


 

.zq {
  width: 245px;
  height: 38px;
  margin-left: 64px;
  color: #434343;
  font-size: 14px;
  background: #f4f5f7;
  border: none;
}
</style>
