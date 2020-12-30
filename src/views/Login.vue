<template>
  <div>
    <div class="fjf">
      <a href="">
        <img src="../assets/image/loginimg/gb.png" alt="">
      </a>
      <span>注册预订返积分</span>
    </div>
    <div class="dl">
      <span>登录途家</span>
    </div>
    <p class="fw">登录以使用更多服务</p>

    <div class="sjh">
      <a href="">
        <span>+ 86</span>
        <img src="../assets/image/loginimg/sjh.png" alt="">
      </a>
      <input type="tel" placeholder="输入手机号"  />
    </div>
    
    <van-button class="fsyzm" type="primary" size="large">发送验证码</van-button><br/>

    <div class="zhmm">
      <a href="">账号密码登录</a>
    </div>

    <div class="dsf">
      <a class="dltilte" href="">第三方登录</a>
      <ul>
        <li>
          <a href="">
            <img src="../assets/image/loginimg/wx.png" alt="">
          </a>
        </li>
        <li>
          <a href="">
            <img src="../assets/image/loginimg/wb.png" alt="">
          </a>
        </li>
        <li>
          <a href="">
            <img src="../assets/image/loginimg/qq.png" alt="">
          </a>
        </li>
        <li>
          <a href="">
            <img src="../assets/image/loginimg/iphone.png" alt="">
          </a>
        </li>
      </ul>
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




<style lang="less" scoped>
.fjf {
  width: 337px;
  height: 20px;
  margin-top: 54px;
  padding: 0 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    display: block;
    width: 20px;
    height: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  span {
    font-family: PingFang-SC-Medium;
    font-size: 12px;
  }
}

.dl {
  width: 116px;
  height: 30px;
  border-left: 3px solid #F09B56;
  margin-top: 54px;
  padding-left: 18px;
  display: flex;
  align-items: center;
  span {
    font-family: PingFang-SC-Medium;
    font-size: 29px;
    line-height: 30px;
  }
}
.fw {
  margin-left: 20px;
  margin-top: 13px;
  font-size: 12px;
  color: #9C9C9C;
}
.sjh {
  width: 339px;
  height: 30px;
  border-bottom: 1px solid #D9D9D9;
  margin:  0 18px;
  margin-top: 39px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    width: 50px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    span {
      font-size: 18px;
      color: #000;
      position: absolute;
      top: 3px;
      left: 3px;
    }
    img {
      width: 8px;
      height: 8px;
      position: absolute;
      bottom: 7px;
      right: 0px;
    }
  }
  input {
    border: none;
    font-size: 20px;
    margin-right: 40px;
  }
}
.fsyzm {
  margin-top: 41px;
  width: 303px;
  height: 44px;
  margin-left: 36px;
  background: #D9D9D9;
  border-radius: 5px;
  color: #fff;
  font-size: 18px;
  border: none;
}
.zhmm {
  width: 100%;
  height: 20px;
  margin-top: 19px;
  text-align: center;
  a {
    color: #666;
    font-size: 12px;
    line-height: 20px;
  }
}
.dsf {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 43px;
  .dltilte {
    font-family: PingFang-SC-Regular;
    font-size: 10px;
    color: #8E8E8E;
  }
  ul {
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    li {
      margin: 0 8px;
      a {
        display: block;
        width: 40px;
        height: 40px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>