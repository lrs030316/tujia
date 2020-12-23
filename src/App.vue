<template>
  <div>
    {{ msg }}
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'App',
  data() {
   return {
    msg: 'hello world'
   }
 }
})
</script>
