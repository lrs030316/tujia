<template>
  <div class="contain" v-for="item in indexData" :key="item.id">
    <div class="rank">
      <img
        class="cup"
        src="http://10.31.162.42:4000/indexdetail/cup.png"
        alt=""
      />
      <span>{{ item.img_rank }}</span>
    </div>
    <div class="rightlist">
      <div class="out_photo">
        <img class="photo" :src="item.img_photo" alt="" />
      </div>
      <div class="out_heart" @click="like">
        <img
          class="heart"
          src="http://10.31.162.42:4000/indexdetail/heart.png"
          alt=""
        />
        <p class="count">
          {{ item.likes + count }}
        </p>
      </div>
      <div class="out_information">
        <img
          @click="com"
          class="information"
          src="http://10.31.162.42:4000/indexdetail/information.png"
          alt=""
        />
        <p class="comment">
          {{ item.comment_count + comment }}
        </p>
      </div>
    </div>
    <div class="score">
      <span> {{ item.score }} | </span>
      <span>
        {{ item.comments }}
      </span>
    </div>
    <van-swipe @change="onChange" class="indexdetail" autoplay="3000" :show-indicators="false">
      <van-swipe-item
        v-for="(elm, index) in JSON.parse(item.imgUrl)"
        :key="index"
      >
        <img class="bg" alt="" :src="elm" />
      </van-swipe-item>
    </van-swipe>
    <div class="room_intro">
      <p>{{ item.title }}</p>
      <p>{{ item.location }}</p>
      <ul class="discount">
        <li v-for="(elm, index) in JSON.parse(item.house)" :key="index">
          {{ elm }}
        </li>
      </ul>
      <ul class="price">
        <li class="current_price">
          <span>￥</span>
          <span>{{ item.current_price }}</span>
        </li>
        <li class="old_price">
          <span>￥</span>
          <span>{{ item.old_proce }}</span>
        </li>
        <li class="pink">{{ item.discount }}</li>
        <li class="last">{{ item.house_count }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {

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
      store.dispatch("getIndexData");
    });

    const indexData = computed(() => store.state.IndexDetail.IndexDetailList);
    return {
      count,
      like,
      comment,
      com,
      indexData,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
  data() {
    return {
      current: 0,
    };
  }
};
</script>
<style lang="less" scoped>
.contain {
  position: relative;
  margin-bottom: 20px;
  .rank {
    position: absolute;
    height: 18px;
    line-height: 18px;
    padding: 0 8px;
    background: #f09b56;
    border-radius: 9px;
    left: 27px;
    top: 8px;
    z-index: 1000;
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
    z-index: 1000;
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
      border-radius: 50%;
      overflow: hidden;
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
    z-index: 1000;
    position: absolute;
    height: 18px;
    line-height: 18px;
    background: rgba(240, 155, 86, 0.3);
    border-radius: 9px;
    left: 28px;
    top: 198px;
    padding: 0 10px;
    span {
      color: #fff;
      &:nth-of-type(2) {
        font-size: 9px;
      }
    }
  }
  .indexdetail {
    .van-swipe-item {
      .bg {
        width: 338px;
        height: 225px;
        margin-left: 20px;
      }
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
        background: rgba(253, 245, 226, 0.5);
        color: #f09b56;
        padding: 4px;
        &:nth-of-type(1) {
          background: rgba(232, 53, 70, 0.3);
          color: #eb6964;
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
        color: #f09b56;
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
        background: #eb6761;
        padding: 2px;
        color: #fff;
        border-radius: 10px;
        font-size: 9px;
      }
      .last {
        font-size: 11px;
        color: #ed746f;
      }
    }
  }
}
</style>
