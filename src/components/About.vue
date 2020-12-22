<template>
  <div>
    关于页{{ count }}
  </div>
</template>

<script>
export default {
  computed:{
    count() {
      return this.$store.$store.count
    }
  }
}
</script>
