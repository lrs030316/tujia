<template>
    <router-view></router-view>
    <my-footer></my-footer>
</template>

<script>
import MyFooter from '../components/Myfooter.vue'

export default {
  // components: { Myfooter },
  data() {
    return {    
    };
  },
  components: {
    MyFooter
  }
};
</script>
<style lang="less" scoped>
  
</style>
