<template>
  <div>
    <router-view></router-view>
    <!-- 底部菜单栏 -->
    <van-tabbar v-model="active" route :placeholder="true">
      <van-tabbar-item
        v-for="item in tabbarList"
        :key="item.to"
        :icon="item.icon"
        :to="item.to"
      >
        {{ item.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabbarList: [
        {
          title: "首页",
          icon: "yemian",
          to: "/index",
          dot: false
        },
        {
          title: "收藏",
          icon: "shoucang",
          to: "/classify",
          dot: false
        },
        {
          title: "发现",
          icon: "faxian",
          to: "/cart",
          dot: false
        },
        {
          title: "消息",
          icon: "icon-test",
          to: "/mine",
          dot: false
        },
        {
          title: "我的",
          icon: "wodedangxuan",
          to: "/mine",
          dot: false
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
  
</style>