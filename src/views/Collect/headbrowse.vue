<template>
   <div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        <van-swipe-item>5</van-swipe-item>
      </van-swipe>
      <div>
       <div>
         <van-card
           price="2.00"
           desc="描述信息"
           title="商品标题"
           thumb=""
           origin-price="10.00"
         >
           <template #footer>
             <van-button size="mini">按钮</van-button>
           </template>
         </van-card>
       </div>
      </div>
    </div>
     <div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        <van-swipe-item>5</van-swipe-item>
      </van-swipe>
      <div>
       <div>
         <van-card
           price="2.00"
           desc="描述信息"
           title="商品标题"
           thumb=""
           origin-price="10.00"
         >
           <template #footer>
             <van-button size="mini">按钮</van-button>
           </template>
         </van-card>
       </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>