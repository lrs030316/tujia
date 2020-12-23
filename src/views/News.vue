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
      <li>
        <van-image
          width="40"
          height="40"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          :radius="20"
        />
        <div class="conbox">
          <span class="spanone">系统通知</span>
          <span class="spantwo">暂无系统通知</span>
        </div>
      </li>
      <!-- <div class="line"></div> -->
      <van-divider />
      <li>
        <van-image
          width="40"
          height="40"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          :radius="20"
        />
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
