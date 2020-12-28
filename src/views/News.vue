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
        <van-image
          width="47"
          height="47"
          :src="item"
        />
        <!-- <img src="../assets/images/消息@2x(1).png" alt=""> -->
        <div class="conbox">
          <span class="spanone">系统通知</span>
          <span class="spantwo">暂无系统通知</span>
        </div>
      </li>
      <van-divider />
      <li>
        <img src="../assets/images/促销@2x.png" alt="">
        <div class="conbox">
          <span class="spanone">优惠促销</span>
          <span class="spantwo">暂无优惠促销</span>
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
import { defineComponent } from 'vue'
export default defineComponent ({
  
})
</script>

<style lang="less">
  @import '../assets/less/news.less';
</style>
