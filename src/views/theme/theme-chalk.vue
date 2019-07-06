<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: 'theme-chalk',
    mounted() {
      // location.reload()
    }
  }
</script>

<style lang="scss">
  @import '../../lib/theme-chalk/index';
</style>

