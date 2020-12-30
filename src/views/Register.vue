<template>
  <div>
    <div class="zctop">
      <a href="">
        <img src="../assets/image/loginimg/gb.png" alt="">
      </a>
      <span>登录</span>
    </div>
    <div class="zcbt">
      <span>注册途家</span>
    </div>
    <p class="fw">
      成为途家会员以使用更多服务，注册即表示您已同意
      <span>《途家 网服务协议》《隐私政策》</span>
    </p>

    <div class="sjh">
      <a href="">
        <span>+ 86</span>
        <img src="../assets/image/loginimg/sjh.png" alt="">
      </a>
      <input type="tel" placeholder="输入手机号"  />
    </div>
    
    <van-button class="fsyzm" type="primary" size="large">发送验证码</van-button><br/>
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
.zctop {
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
.zcbt {
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
  margin-right: 26px;
  span {
    color: #000;
  }
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

</style>


