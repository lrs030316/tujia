<template>
  <!-- 幻灯片效果 -->
  <van-swipe @change="onChange">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
    <template #indicator>
      <div class="custom-indicator">{{ current + 1 }}/4</div>
    </template>
  </van-swipe>

  <!-- 收藏、下载、评论 -->

  <div class="overview">
    <!-- 标题 -->
    <h2>[一·巢]毗邻xx街道</h2>
    
    <!-- 标签 -->
    <div class="tag">
      <van-tag
        color="yellow"
        text-color="orangered"
        @click="show = true"
      >
        优选PRO
      </van-tag>
      <van-action-sheet v-model:show="show" title="标签说明">
        <ul class="content">
          <li>内容</li>
          <li>内容</li>
          <li>内容</li>
          <li>内容</li>
          <li>内容</li>
          <li>内容</li>
          <li>内容</li>
        </ul>
      </van-action-sheet>
    </div>

    <!-- 点评 -->
    <van-cell title="5.0超赞" is-link value="22条点评" class="ov-cell" />

    <!-- 地图·周边 -->
    <van-cell
      title="单元格单元格单元格单"
      label="单元格单元格单元格单元格单元格单元格单元格单元格单元格单元格"
      value="地图·周边"
      is-link
      icon="location-o"
      class="map ov-cell"
    />
  </div>

  <div class="space"></div>

  <!-- 优惠券 -->
  <!-- 优惠券单元格 -->
  <div class="youhui">
    <van-coupon-cell
      :coupons="state.coupons"
      :chosen-coupon="state.chosenCoupon"
      @click="state.showList = true"
      icon="location-o"
    />
    <!--  -->
    <!-- 优惠券列表 -->
    <van-popup
      v-model:show="state.showList"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px;"
    >
      <van-coupon-list
        :coupons="state.coupons"
        :chosen-coupon="state.chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
    <span class="choose" @click="state.showList = true">可领取</span>
    <van-divider />
  </div>

  <!-- 日期选择 -->
  


  
</template>

<script lang="ts">
import { ref } from 'vue';
import { Toast } from 'vant';
import { defineComponent, reactive } from 'vue'

const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
};

export default defineComponent ({
  data() {
    return {

    }
  },
  setup() {
    const current = ref(0);
    const show = ref(false);

    const onChange = (index) => {
      current.value = index;
    };

    const state = reactive({
      coupons: [coupon],
      showList: false,
      chosenCoupon: -1
    });

    const listChange = (index) => {
      state.showList = false;
      state.chosenCoupon = index;
    };

    const onExchange = (code) => {
      state.coupons.push(coupon);
    };

    return {
      current,
      onChange,
      show,
      state,
      listChange,
      onExchange,
      disabledCoupons: [coupon]
    };
  }
})
</script>

<style lang='less'>
  @import '../assets/less/housedetail.less';
</style>
