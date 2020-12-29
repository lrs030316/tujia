<template>
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
      <img src="http://10.31.162.85:4000/indexdetail/redPakage.png" alt="" />
      <span class="discount">9.5折优惠</span>
      <span class="catch">去领取 &nbsp; ></span>
    </div>
  </div>
  <div class="prompt">
    <p>
      温馨提示：请您关注当地主管部门的出行建议和要求，合理Aap安排出行，做好自我防护。
    </p>
  </div>
  <van-swipe @change="onChange" class="indexdetail">
    <van-swipe-item v-for="item in firstlist" :key="item.id">
      <div class="rank">
        <img
          class="cup"
          src="http://10.31.162.85:4000/indexdetail/cup.png"
          alt=""
        />
        <span>{{ item.title }}</span>
      </div>
      <div class="rightlist">
        <div class="out_photo">
          <img
            class="photo"
            src="http://10.31.162.85:4000/indexdetail/photo.png"
            alt=""
          />
        </div>
        <div class="out_heart" @click="like">
          <img
            class="heart"
            src="http://10.31.162.85:4000/indexdetail/heart.png"
            alt=""
          />
          <p class="count">
            {{ 1208 + count }}
          </p>
        </div>
        <div class="out_information">
          <img
            @click="com"
            class="information"
            src="http://10.31.162.85:4000/indexdetail/information.png"
            alt=""
          />
          <p class="comment">
            {{ 938 + comment }}
          </p>
        </div>
      </div>
      <div class="score">
        <span>
          {{ item.score }} | 
        </span>
        <span>
          {{ item.comments }}
        </span>
      </div>
      <img class="bg" :src="item.src" alt="" />
    </van-swipe-item>
    <template #indicator>
      <div class="custom-indicator">
        {{ current + 1 }}/{{ firstlist.length }}
      </div>
    </template>
  </van-swipe>
  <div class="room_intro">
    <p>9四合院浪漫大床【荣小姐】故宫天安门南锣</p>
    <p>整套·1居1床2人·距后海/南锣鼓巷地区直线759米</p>
    <ul class="discount">
      <li>今日甩卖减239</li>
      <li>超赞房东</li>
      <li>近地铁</li>
      <li>宽松取消</li>
      <li>行李寄存</li>
    </ul>
    <ul class="price">
      <li class="current_price">
        <span>￥</span>
        <span>397</span>
      </li>
      <li class="old_price">
        <span>￥</span>
        <span>596</span>
      </li>
      <li class="pink">
        6.8折，天天特惠
      </li>
      <li class="last">
        房量紧张
      </li>
    </ul>
  </div>
  <!-- <div v-for="item in indexData" :key="item.id">
    {{ item.img_rank }}
  </div> -->
</template>

<script>
import { ref, reactive, onMounted, computed } from "vue";
import indexHeader from "../components/IndexHeader.vue";
import { useStore } from "vuex";
import store from '../store';

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

    const current = ref(0);
    const onChange = () => {
      current = index;
    };

    let count = ref(0);
    const like = () => {
      count.value++;
    };

    let comment = ref(0);
    const com = () => {
      comment.value++;
    };

    const store = useStore();

    onMounted(() => {
      store.dispatch("getIndexData")
    })

    const indexData = computed(() => store.state.IndexDetail.IndexDetailList)
    return {
      list,
      change,
      num,
      actionList,
      number,
      changeAction,
      count,
      like,
      comment,
      com,
      indexData
    };
  },
  components: {
    indexHeader,
  },
  data() {
    return {
      current: 0,
      firstlist: [
        {
          id: 1,
          src: "http://10.31.162.85:4000/indexdetail/banner.png",
          title: "后海/南锣鼓巷地区优质服务榜 NO.1",
          score: "4.9分",
          comments: "\"房间整齐\""
        },
        {
          id: 2,
          src: "http://10.31.162.85:4000/indexdetail/banner1.png",
          title: "前海/我不想写代码 NO.1",
          score: "1.2分",
          comments: "\"乱七八糟\""
        },
        {
          id: 3,
          src: "http://10.31.162.85:4000/indexdetail/banner.png",
          title: "谁爱写谁写，别找我 NO.1",
          score: "4.1分",
          comments: "\"还可以\""
        },
        {
          id: 4,
          src: "http://10.31.162.85:4000/indexdetail/banner1.png",
          title: "劳资撤了 NO.1",
          score: "2.2分",
          comments: "\"凑活吧\""
        },
      ]
    };
  },
  
  methods: {
    onChange(index) {
      this.current = index;
    }
  },
};
</script>
<style lang="less" scoped>
.list {
  display: flex;
  justify-content: space-evenly;
  font-size: 11px;
  margin-bottom: 14px;
  padding-top: 59.5px;
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
.prompt {
  margin-top: 11px;
  width: 338px;
  height: 63px;
  background: rgba(253, 243, 243, 0.5);
  margin-left: 20px;
  margin-bottom: 20px;
  p {
    font-size: 11px;
    padding: 17px 24px 17px 24px;
    color: #3e3e3e;
  }
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.indexdetail {
  .van-swipe-item {
    position: relative;
    .bg {
      width: 338px;
      height: 225px;
      margin-left: 20px;
    }
    .rank {
      position: absolute;
      height: 18px;
      line-height: 18px;
      padding: 0 8px;
      background: #f09b56;
      border-radius: 9px;
      left: 27px;
      top: 8px;
      span {
        font-size: 9px;
        color: #fff;
      }
      .cup {
        width: 10px;
        height: 11px;
      }
    }
    .rightlist {
      position: absolute;
      right: 28px;
      top: 9px;
      width: 45px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      .out_photo {
        margin-bottom: 9px;
        .photo {
          width: 41px;
          height: 45px;
        }
      }
      .out_heart {
        margin-bottom: 11px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        .heart {
          width: 23px;
          height: 23px;
        }
        .count {
          width: 24px;
          text-align: center;
          margin: 0;
          font-size: 12px;
          color: #fff;
        }
      }
      .out_information {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .information {
          width: 23px;
          height: 23px;
        }
        .comment {
          margin: 0;
          width: 24px;
          text-align: center;
          color: #fff;
          font-size: 12px;
        }
      }
    }
    .score {
      position: absolute;
      height: 18px;
      line-height: 18px;
      background: rgba(240, 155, 86, .3);
      border-radius: 9px;
      left: 28px;
      bottom: 10px;
      padding: 0 10px;
      span {
        color: #fff;
        &:nth-of-type(2) {
          font-size: 9px;
        }
      }
    }
  }
  .custom-indicator {
    width: 40px;
    height: 18px;
    background: rgba(240, 155, 86, .3);
    border-radius: 9px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    margin-right: 20px;
    margin-bottom: 10px;
  }
}
.room_intro {
  margin-left: 20px;
  p {
    &:nth-of-type(1) {
      margin-top: 13px;
      margin-bottom: 9px;
      font-size: 15px;
      font-weight: bold;
    }
    &:nth-of-type(2) {
      margin-top: 0;
      margin-bottom: 11px;
      font-size: 11px;
      color: #666;
    }
  }
  .discount {
    display: flex;
    justify-content: right;
    font-size: 9px;
    li {
      margin-right: 10px;
      background: rgba(253, 245, 226, .5);
      color: #F09B56;
      padding: 4px;
      &:nth-of-type(1) {
        background: rgba(232, 53, 70, .3);
        color: #EB6964;
      }
    }
  }
  .price {
    display: flex;
    justify-content: right;
    align-items: flex-end;
    li {
      margin-right: 6px;
    }
    .current_price {
      color: #F09B56;
      span {
        &:nth-of-type(1) {
          font-size: 10px;
        }
        &:nth-of-type(2) {
          font-size: 14px;
        }
      }
    }
    .old_price {
      span {
        font-size: 10px;
        color: #666;
      }
    }
    .pink {
      background: #EB6761;
      padding: 2px;
      color: #fff;
      border-radius: 10px;
      font-size: 9px;
    }
    .last {
      font-size: 11px;
      color: #ED746F;
    }
  }
}
</style>
