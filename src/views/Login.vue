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
    
    <!-- 输入手机号，调起手机号键盘 -->
    <van-field class="sjh" v-model="state.tel" type="tel" label="手机号" />

  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tel: ''
    });

    return { state };
  },
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
    // margin-left: 19px;
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
  // background: pink;
  border-bottom: 1px solid #D9D9D9;
  margin:  0 18px;
  margin-top: 39px;
}
</style>