<template>
  <!-- 幻灯片效果 -->
  <div class="lunbo">
    <van-swipe @change="onChange" :height="250">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/4</div>
      </template>
    </van-swipe>
    <!-- 收藏、下载、评论 -->
    <div class="lunbo-top">
      <div class="lunbo-top-left">
          <img src="../assets/images/housedetail/arrow-left.png" alt="">
      </div>
      <div class="lunbo-top-right">
        <van-badge :content="20" color="#fff">
          <img src="../assets/images/housedetail/collection.png" alt="">
        </van-badge>
        <img src="../assets/images/housedetail/down.png" alt="">  
        <img src="../assets/images/housedetail/comment.png" alt="">  
      </div>
    </div>
  </div>

  <!-- 概览内容 -->
  <div class="overview">
    <!-- 标题 -->
    <h2>[一·巢]毗邻xx街道</h2>
    
    <!-- 标签 -->
    <div class="tag">
      <van-tag
        text-color="#FFC193"
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
    <van-cell title="5.0超赞" is-link value="22条点评" class="review ov-cell" />

    <!-- 地图·周边 -->
    <van-cell
      title="单元格单元格单元格单"
      label="单元格单元格单元格单元格单元格单元格单元格单元格单元格单元格"
      value="地图·周边"
      icon="location-o"
      class="map ov-cell"
    />
  </div>

  <div class="space"></div>

  <!-- 房源内容 -->
  <div class="resource">
    <!-- 优惠券 -->
    <!-- 优惠券单元格 -->
    <div class="youhui">
      <van-coupon-cell
        title="9.5折优惠"
        :coupons="state.coupons"
        :chosen-coupon="state.chosenCoupon"
        @click="state.showList = true"
      />
      <img src="../assets/images/housedetail/redp.png" alt="">
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
    <van-cell to="houseDetail" class="day" >
      <template #title>
        <span>
          <span class="c-g">12月23日</span>
          <span class="custom-title"> 星期三 入住</span>
          <van-icon name="arrow" /> 
        </span>
        <span class="daytime">共1晚</span>
        <span>
          <span class="c-g">12月24日</span>
          <span class="custom-title"> 星期四 离开</span>
          <van-icon name="arrow" />
        </span>
      </template>    
    </van-cell>
    <van-divider />
    <!-- 详细信息 -->
    <van-card>
      <template #thumb>
        <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>当前房源</span>
      </template>
      <template #title>
        <span class="custom-title">整套·1居·1床2人·30㎡</span>
        <van-icon name="arrow" /> 
      </template>
      <template #desc>
        <div class="describe">描述信息</div>
        <div class="describe">描述信息</div>
      </template>
      <template #tags>
        <div class="icon">
          <van-icon name="warning" color="#B4B4B4"/>
          <span>啊啊啊啊啊啊啊啊啊啊啊</span>
          <van-icon name="warning" color="#B4B4B4"/>
          <span>啊啊啊啊</span>
          <van-icon name="warning" color="#B4B4B4"/>
          <span>啊啊啊啊啊啊啊啊啊啊啊</span>
        </div>
        
      </template>
      <template #bottom>
        <div class="card-left">
          <van-icon name="warning" color="#FE5E5E"/>
          <span>啊啊啊啊啊啊啊</span>
        </div>
        <div class="card-right">
          <span class="price">
            ¥ 950<span class="prices">/晚</span>
          </span>
          <van-button size="mini">预订</van-button>
        </div>
      </template>
    </van-card>
  </div>

  
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
// 轮播
.van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
// 轮播指示器
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: #383838;
  color: #C2C2C1;
  border-radius: 9px;
}
// 返回、收藏
.lunbo-top {
  width: calc(100% - 26px);
  height: 30px;
  padding: 0 12.5px 0 13.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 54.5px;
  left: 0;
  .lunbo-top-right {
    width: 113.5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .van-badge {
      color: #000;
    }
  }
  img {
      width: 22px;
    }
}
// 概览内容
.overview {
  padding: 0 20px 0 13px;
  // 标题
  h2 {
    font-size: 21px;
    font-weight: 600;
    color: #303030;
    margin: 11px 0;
  }
  // 标签
  .tag {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 14px;
    span {
      font-size: 12px;
      padding: 3px 5px;
      margin-right: 8px;
      background: rgba(#FAD6BB, 0.3);
      border-radius: 1px;
    }
  }
}
// 点击标签
.van-action-sheet__header {
  text-align: left;
  padding: 0 20px;
  background: #eee;
}
.van-action-sheet__content {
  background: #eee;
  padding: 0 16px 15px;
  .content {
    background: #fff;
    border-radius: 8px;
  }
}
// 点评、地图
.ov-cell {
  background: #F4F5F8;
  border-radius: 9px 5px 5px 5px;
  .van-cell__title {
    font-weight: bold;
    font-size: 19px;
    flex: 3 1 0%;
    color: #131313;
    span {
      text-indent: -20px;
    }
  }
  .van-cell__value {
    font-size: 12px;
    color: #FBAD72;
  }
  i {
    color: #FAB47D;
  }
}
.map{
  margin: 10px 0;
  .van-cell__title {
    text-indent: -20px;
    font-size: 13px;
    color: #323234;
  }
  .van-cell__label {
    text-indent: 0px;
    color: #787879;
    font-size: 12px;
  }
  .van-cell__value {
    position: relative;
    span {
      position: absolute;
      top: 22px;
      right: 0;
    }
  }
  .van-cell__left-icon, .van-cell__right-icon {
    line-height: 70px;
  }
}
// 间隔
.space {
  width: 100%;
  height: 10px;
  background: #eee;
}

.van-divider {
  margin: 0 15px;
}
// 房源内容
.resource {
  padding: 0 19px 0 11px;
  .van-cell {
    padding: 10px 0;
  }
  // 优惠券
  .youhui {
    position: relative;
    img {
      width: 22px;
      position: absolute;
      top: 11px;
      left: 0;
    }
    .van-cell__title span {
      margin: 29px;
    }
    .van-coupon-cell__value, .van-icon-arrow {
      display: none;
    }
    .choose {
      background: #FE6666;
      color: #fff;
      font-size: 12px;
      padding: 3px 9px;
      border-radius: 12px;
      position: absolute;
      top: 10px;
      right: 4px;
      border: 1px solid #F3221F;
    }
  }
  // 日期
  .day .van-cell__title {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: normal;
    .c-g {
      font-size: 16px;
      font-weight: bold;
      color: #282828;
    }
    .daytime {
      border: 1px solid #F2F2F3;
      border-radius: 8px;
      padding: 2px 5px;
      color: #525252;
      font-weight: bold;
    }
    .custom-title {
      color: #A8A8A8;
      font-weight: bold;
    }
  }
}
// 详细信息
.van-card {
  background: #fff;
  padding: 0 0 11px 0;
  border-bottom: 1px solid #F7F7F7;
  .van-card__thumb {
    width: 75px;
    height: 98px;
    position: relative;
    span {
      width: 100%;
      background: rgba(0, 0, 0, 0.4);
      color: #ddd;
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: center;
      border-radius: 0 0 8px 8px;
    }
  }
  .custom-title {
    font-size: 13px;
    font-weight: bold;
    color: #939191;
  }
  .describe {
    width: 250px;
  }
  .van-card__bottom {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .card-right {
      width: 150px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .price {
        font-size: 14px;
        font-weight: bold;
      }
      .prices {
        font-size: 12px;
        font-weight: normal;
      }
    }
    .van-button--mini {
      height: 28px;
      padding: 0 15px;
      background: orange;
      border-radius: 2px;
      color: #fff;
    }
  }
  .icon {
    width: 220px;
    .van-icon, span {
      margin-right: 3px;
    }
  }
}
</style>
