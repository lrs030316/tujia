<template>
  <div @click="xx">X</div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const xx = () =>{
     router.push("/house")
   }
   return { xx }
  }
}
</script>
