<template>
  <header class="house">
    <!-- <van-dropdown-menu>
      <van-dropdown-item v-model="state.value1" :options="option1" />
    </van-dropdown-menu>
    <div>
      <van-cell title="" :value="date" @click="show = true" />
      <van-calendar v-model:show="show" type="range" @confirm="onConfirm" />
    </div> -->
    <div class="titleTo">
      <div class="buttonTo" @click="country">全部城市</div>
      <div class="buttonTo" @click="calendar">shijian</div>
    </div>
  </header>
  <main>
    <swipe-house />
  </main>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import swipeHouse from '../../../components/SwipeHouse.vue';

// import { reactive } from 'vue';
// import { ref } from 'vue';

export default {
  
  setup() {
    const router = useRouter();
    const country = ()=>{
      router.push("/Country")
    };
    const Calendar = ()=>{
      router.push("/Calendar")
    };
    return { 
      country,
      Calendar,
      
    }
    
  //   const state = reactive({
  //     value1: 0,
  //   });
  //   const option1 = [
  //     { text: '全部城市', value: 0 },
  //     { text: '北京', value: 1 },
  //   ]; 
  //   const date = ref('');
  //   const show = ref(false);

  //   const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
  //   const onConfirm = (date1) => {
  //   const [start, end] = date1;
  //     show.value = false;
  //     date.value = `${formatDate(start)} - ${formatDate(end)}`;
  //   };
  //   return {
  //     state,
  //     option1,
  //     date,
  //     show,
  //     onConfirm,
  //   };
  },
  components: {
    swipeHouse
  }
}
</script>

<style lang="less" scoped>
@import "../../../assets/less/collect.less";
.van-dropdown-menu__title {
  color: red;
}
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  header{
    height: 48px;
  }
  header .van-dropdown-menu{
    width: 20%;
    float: left;
  }
  header .van-cell{
    width: 20%;
    float: left;
    font-size: 12px;
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
</style>