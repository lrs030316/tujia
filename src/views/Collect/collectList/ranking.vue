<template>
  <van-empty 
    description="暂无收藏" 
    class="custom-image"
    :image="imgp">
    <van-button round type="danger" class="bottom-button">随便逛逛</van-button>
  </van-empty>
</template>

<script >
import imgp from '../../../assets/imgers/Collect/empty.png';
export default {
  data() {
    return{
      imgp:imgp
    }
  },

}
</script>

<style lang="less" scoped>
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
  .bottom-button {
    width: 160px;
    height: 40px;
    background: orangered;
  }
</style>