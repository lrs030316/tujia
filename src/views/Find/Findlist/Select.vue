<template>
  <div class="list">
    <img class="list-img" :src="imgUrp" alt="">
    <div class="list-1">
      <img :src="imgUrl" alt="">
      <span>江郎山风景区</span>
    </div>
    <div class="list-2">
      <img class="img-1" :src="imgUra" alt="" ><span>江浙沪周边游<img :src="imgUrb" alt="">绝美小众景点</span>
    </div>
    <div class="list-3">
      <img :src="imgUrc" alt="">
      <span>Dyxn6636</span>
      <div class="">
        <img :src="imgUrd" alt="">
        <span>162</span>
      </div>
    </div>
  </div>
</template>

<script  >

import imgUrp from "../../../assets/imgers/Find/find-img.png";
import imgUrl from "../../../assets/imgers/Find/location.png";
import imgUra from "../../../assets/imgers/Find/logo-1.png";
import imgUrb from "../../../assets/imgers/Find/logo-2.png";
import imgUrc from "../../../assets/imgers/Find/logo.png";
import imgUrd from "../../../assets/imgers/Find/dianzan.png";

export default {
  data() {
    return{
      // 引用图片
      imgUrp:imgUrp,
      imgUrl:imgUrl,
      imgUra:imgUra,
      imgUrb:imgUrb,
      imgUrc:imgUrc,
      imgUrd:imgUrd,
    }
    
  }
}
</script>

<style lang="less" scoped>
  .list {
    display: flex;
    flex-direction: column;
    width: 163px;
    height: 230px;
    margin-left: 19px;
    border: 1px solid #ccc;
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
      width: 100%;
      height: 28px;
      span {
        font-size: 12px;
      }  
    }
    .list-2 img{
      width: 12px;
      height: 12px;
    }
    .list-2 .img-1{
      padding-left: 8px;
    }
    .list-3{
      display: flex;
      flex-direction:row;
      width: 100%;
      height: 22px;
      padding-top:18px;
      
    }
    .list-3 img{
      top: 12px;
      width: 22px;
      height: 22px;
      padding-left: 8px ;
    }
    .list-3 span{
      width: 44px;
      height: 9px;
      font-size: 6px;
      line-height: 9px;
      color: #111111;
      margin-left: 4px;
      margin-top:6px ;
    }
  }
  
</style>