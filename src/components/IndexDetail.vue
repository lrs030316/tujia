<template>
  <header>
      <span class="iconfont icon-houtui" @click="back"></span>
      <div class="put">
        <div class="put-left">
          <div class="location">
            {{ loca }}
          </div>
          <div class="time">
            <div>
              <span class="enter-leave">住</span>
              <span class="date">12.08</span>
            </div>
            <div>
              <span class="enter-leave">离</span>
              <span class="date">12.09</span>
            </div>
          </div>
        </div>
        <input
          type="text"
          class="put-right"
          placeholder="搜索北京的景点、地标、房源"
        />
      </div>
      <img src="http://10.31.162.85:4000/indexdetail/ico-map.png" alt="" />
      <span class="text">地图</span>
  </header>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from "vue-router";

export default {
  setup() {
    const loca = ref("北京");
    const router = useRouter();
    const back = () => {
      router.push("/index");
    };
    return { loca, back };
  }
};
</script>
<style lang="less" scoped>
header {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 17px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  background: #fff;
  .icon-houtui {
    font-size: 25px;
  }
  .put {
    width: 272.5px;
    height: 32.5px;
    opacity: 0.5;
    display: flex;
    .put-left {
      width: 89px;
      height: 100%;
      border-right: 1px solid #fff;
      border-radius: 6px 0 0 6px;
      display: flex;
      overflow: hidden;
      background: #e4e4e4;
      .location {
        width: 40%;
        height: 32.5px;
        color: #000;
        font-size: 13px;
        text-align: center;
        line-height: 32.5px;
        font-weight: bold;
      }
      .time {
        flex: 1;
        .enter-leave {
          font-size: 10px;
          color: #666666;
        }
        .date {
          font-size: 9px;
          color: #000;
          font-weight: bold;
        }
      }
    }
    input::-webkit-input-placeholder {
      font-size: 10px;
      text-align: center;
      color: #909090;
    }
    .put-right {
      flex: 1;
      border-radius: 0 6px 6px 0;
      border: none;
      outline: none;
      background: #e4e4e4;
    }
  }
  img {
    width: 23px;
    height: 23px;
  }
  .text {
    font-size: 12px;
  }
}
</style>
