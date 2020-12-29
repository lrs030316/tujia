<template>
  <!-- 标题 -->
  <van-nav-bar
    title="消息中心"
    :border="false"
    :fixed="true"
    :placeholder="true"
  />

  <div class="concent">
    <!-- 系统通知 -->
    <ul class="newsbox">
      <li v-for="(item, index) in imgList" :key="index">
        <img :src="item.imgurl" alt="">
        <div class="conbox">
          <span class="spanone">{{ item.title }}</span>
          <span class="spantwo">{{ item.notive }}</span>
        </div>
      </li>
    </ul>

    <!-- 无聊天时显示图标 -->
    <van-empty
      class="custom-image"
      image="https://img.yzcdn.cn/vant/custom-empty-image.png"
      description="暂无聊天消息"
    />
    
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import horn from '../assets/images/news/horn.png';
import gift from '../assets/images/news/gift.png';
export default defineComponent ({
  data() {
    return {
      imgList: [
        {
          imgurl: horn,
          title: '系统通知',
          notice: '暂无系统通知'
        },{
          imgurl: gift,
          title: '优惠通知',
          notice: '暂无优惠促销'
        }
      ]
    }
  }
})
</script>

<style lang="less" scoped>
.concent {
  position: absolute;
  top: 46px;
  bottom: 50px;
  left: 0;
  right: 0;
  background: #F7F8FA;
  padding-top: 10px;
}

// 系统通知
.newsbox {
  padding: 0 11px;
  background: #fff;
  margin-bottom: 18px;
  li {
    height: 70px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #F7F8FA;
    img {
      width: 47px;
      height: 47px;
    }
  }
  .van-divider {
    margin: 0 15px;
  }
  .conbox {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    .spanone {
      font-size: 16px;
    }
    .spantwo {
      font-size: 12px;
    }
  }
}

// 无聊天时显示图标
.custom-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .van-empty__image {
    width: 90px;
    height: 90px;
  }
  .van-empty__description {
    padding: 0;
  }
}

</style>
