<template>
 <!-- 底部菜单栏 -->
 <div class="footer">
    <van-tabbar  v-model="active" route :placeholder="true">
      <van-tabbar-item
        v-for="item in tabbarList"
        :key="item.title"
        :to="item.to"
      >
        {{ item.title }}
        <template #icon>
          <span class="iconfont" :class="'icon-' + item.icon"></span>
        </template>
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
          to: "/house",
          dot: false
        },
        {
          title: "发现",
          icon: "faxian",
          to: "/select",
          dot: false
        },
        {
          title: "消息",
          icon: "icon-test",
          to: "/news",
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
<style lang='less' scoped>
.footer{
  height: 60px;
}
</style>
