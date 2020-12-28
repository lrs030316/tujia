<template>
  <ul class="routerBox">
    <router-link v-for="(item,index) in navList" :key="index" tag="li" :to="item.path" :class="{hidd: index === number}" @click="hiddLine(index)">{{ item.name }}</router-link>
    
  </ul>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          path: "/House",
          name: "房屋"
        },
        {
          path: "/Landlord",
          name: "房东"
        },
        {
          path: "/Ranking",
          name: "榜单"
        },
        {
          path: "/Find",
          name: "发现"
        }
      ],
      number: 0
    }
  },
  methods:{
    hiddLine(i){
      this.number = i;
    }
  }
}
</script>

<style lang="less" scoped>
  .routerBox {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .router-link-active {
    font-weight: 900;
    color: blue;
  }
  .hidd {
    background: chartreuse;
  }  
</style>