<template>
  <div class="all">
    <index-header />
    <ul class="list">
      <li
        v-for="(item, index) in list"
        :key="index"
        @click="change(index)"
        :class="{ active: index === num }"
      >
        {{ item }}
        <span class="iconfont icon-xiala"></span>
      </li>
    </ul>
    <div class="action">
      <ul>
        <li
          v-for="(item, index) in actionList"
          :key="index"
          @click="changeAction(index)"
          :class="{ activeAction: index === number }"
        >
          <div>
            {{ item }}
            <span
              class="iconfont icon-xiala"
              v-if="index === actionList.length - 1"
            ></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="redPackage">
      <div class="redleft">
        <img src="../assets/img/redPakage.png" alt="" />
        <span class="discount">9.5折优惠</span>
        <span class="catch">去领取 &nbsp; ></span>
      </div>
    </div>
    <div class="prompt">
      <p>
        温馨提示：请您关注当地主管部门的出行建议和要求，合理Aap安排出行，做好自我防护。
      </p>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import indexHeader from '../components/IndexHeader.vue';

export default {
  setup() {
    const list = reactive(["价格 / 钻级", "推荐排序", "位置", "筛选"]);
    const actionList = reactive([
      "双旦狂欢",
      "天天特惠",
      "超赞品牌",
      "优选PRO",
      "优惠",
    ]);
    const num = ref(0);
    const number = ref(0);
    const change = (i) => {
      num.value = i;
    };
    const changeAction = (i) => {
      number.value = i;
    };
    return { list, change, num, actionList, number, changeAction };
  },
  components: {
    indexHeader
  }
};
</script>
<style lang="less" scoped>
header {
  margin-top: 10px;
  margin-bottom: 17px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
.list {
  display: flex;
  justify-content: space-evenly;
  font-size: 11px;
  margin-bottom: 14px;
}
.active {
  color: #f19f5d;
}
.action {
  width: 100%;
  height: 48px;
  background: linear-gradient(to bottom, #e8eef3, #ffffff);
  margin-bottom: 3px;
  ul {
    display: flex;
    justify-content: space-evenly;
    li {
      div {
        width: 68px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        font-size: 11px;
        background: #fff;
        border-radius: 14px;
        margin-top: 10px;
      }
    }
  }
}
.activeAction {
  color: #f19f5d;
}
.redPackage {
  width: 338px;
  height: 35px;
  background: rgba(253, 243, 243, 0.5);
  border-radius: 8px;
  margin: auto;
  .redleft {
    height: 100%;
    position: relative;
    img {
      width: 23px;
      height: 23px;
      position: absolute;
      top: 50%;
      left: 9px;
      transform: translateY(-50%);
    }
    .discount {
      font-size: 9px;
      display: inline-block;
      width: 55px;
      height: 14px;
      border: 1px solid #ec706b;
      border-radius: 3px;
      position: absolute;
      top: 50%;
      left: 35px;
      transform: translateY(-50%);
      color: #ec706b;
      padding: 3px;
      line-height: 14px;
    }
    .catch {
      color: #ec706b;
      font-size: 10px;
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      color: #ec706b;
      padding: 3px;
      line-height: 14px;
    }
  }
}
.all {
  position: relative;
}
.prompt {
  margin-top: 11px;
  width: 338px;
  height: 63px;
  background: rgba(253, 243, 243, 0.5);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  p {
    font-size: 11px;
    padding-left: 18px;
    padding-right: 24px;
    color: #3e3e3e;
  }
}
</style>
