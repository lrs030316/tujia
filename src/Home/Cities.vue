<template>
  <div v-if="citieList.length">
    <div>
      <div class="title">热门城市</div>
      <ul class="hotul">
        <li
          v-for="item in hotList.cities"
          :key="item.cityId"
          class="hotitem"
          @click="goHome(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>

    <div v-for="item in cityList" :key="item.prefix">
      <div class="title">{{ item.prefix.toUpperCase() }}</div>
      <ul class="cityul">
        <li
          v-for="city in item.cities"
          :key="city.cityId"
          class="cityItem"
          @click="goHome(city)"
        >
          {{ city.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getCitiesListApi } from "../homehttps/apis";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      citieList: []
    };
  },
  async beforeRouteEnter(to, from, next) {
    const res = await getCitiesListApi();
    next(vm => {
      vm.citieList = res.result;
    });
  },
  computed: {
    hotList() {
      return this.citieList[0];
    },
    cityList() {
      return this.citieList.slice(1);
    }
  },
   methods: {
  //   ...mapMutations(["changeCity"]),
    goHome(city) {
  //     // 改变vuex的值
   this.$store.commit("changeCity", city);
  //     // 辅助函数的写法
      
      this.$router.go(-1);
     }
   }
};
</script>
<style lang="less" scoped>
.title {
  width: 100%;
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  color: green;
  background: peachpuff;
}
.hotul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: pink;
  padding-bottom: 15px;

  .hotitem {
    width: 95px;
    height: 33px;
    margin-top: 15px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 12px;
    text-align: center;
    line-height: 33px;
  }
}
.cityul {
  li {
    height: 44px;
    line-height: 44px;
    margin: 0 15px;
    border-bottom: 1px solid #c8c7cc;
    font-size: 14px;
    color: green;
  }
}
</style>
