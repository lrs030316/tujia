<template>
  <header>
    <div @click="xx">X</div>
    <h2>选择城市</h2>
  </header>
  <main>
    <van-grid :gutter="10">
      <van-grid-item v-for="value in 37" :key="value" icon="photo-o" text="文字" />
    </van-grid>
  </main>
  
</template>

<script>
export default {

}
</script>

<style>

</style>