<template>
  <div class="findlist" v-for="item in collectlistData" :key="item">
    <img class="list-img" :src="item.imgurl" alt="">
    <div class="list-1">
      <img :src="imgUrl" alt="">
      <span>{{ item.diqu }}</span>
    </div>
    <div class="list-2">
      <span>{{ item.title }}</span>
    </div>
    <div class="list-3">
      <img class="list-3img" :src="imgUrc" alt="">
      <span class="list-3text">abcd</span>
      <div class="praise">
        <img class="praiseimg" :src="imgUrd" alt="">
        <span class="praisespan">{{ item.dz }}</span>
      </div>
    </div>
  </div>
</template>

<script  >

import imgUrp from "../../../assets/imgers/Find/find-img.png";
import imgUrl from "../../../assets/imgers/Find/location.png";
import imgUrc from "../../../assets/imgers/Find/logo.png";
import imgUrd from "../../../assets/imgers/Find/dianzan.png";
import {collectlist} from "../../../utils/api";

export default {
  data() {
    return{
      // 引用图片
      imgUrp:imgUrp,
      imgUrl:imgUrl,
      imgUrc:imgUrc,
      imgUrd:imgUrd,
      collectlistData: []
    }
  },
  mounted() {
    this.getcollectlistData();
  },
  methods: {
    async getcollectlistData() {
      const res = await collectlist();
      this.collectlistData = res.result;
      console.log(this.collectlistData);
    }
  }
}
</script>

<style lang="less" scoped>
  .findlist {
    display: flex;
    flex-direction: column;
    float: left;
    width: 163px;
    height: 230px;
    margin-left: 19px;
    border: 1px solid #ccc;
    margin-top: 10px;
    .list-img{
      width: 100%;
      height: 122px;
    }
    .list-1{
      width: 100%;
      height: 10px;
      padding: 9px;
    }
    .list-1 img{
      width: 8px;
      height: 10px;
    }
    .list-1 span{
      padding-left: 3px;
      font-size: 10px;
      color: #5C5C5C;
    }
    .list-2 {
      width: 95%;
      height: 28px;
      margin-left: 7px;
      margin-top:8px ;
      span {
        font-size: 12px;
        
      }  
    }
    .list-3{
      display: flex;
      flex-direction:row;
      width: 100%;
      height: 22px;
      padding-top:18px;
      
    }
    .list-3 .list-3img{
      top: 12px;
      width: 22px;
      height: 22px;
      margin-left: 8px ;
    }
    .list-3 .list-3text{
      width: 44px;
      height: 9px;
      font-size: 6px;
      line-height: 9px;
      color: #111111;
      margin-left: 4px;
      margin-top:6px ;
    }
    .praise{
      width: 37px;
      height: 22px;
      margin-left: 39px;
      margin-right: 9px;
    }
    .praise .praiseimg{
      width: 22px;
      height: 22px;
    }
    .praise .praisespan{
      float: right;
      font-size: 6px;
      width: 10px;
      height: 7px;
      margin-top: 3px;
      
    }
  }
  
</style>