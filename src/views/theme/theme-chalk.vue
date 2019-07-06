<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: 'theme-chalk',
    mounted() {
      document.body.setAttribute('id', 'body-theme-chalk')
      // setTimeout(_ => (this.$store.commit("loading", false)), 1000)
    }
  }
</script>

<style lang="scss">
   @import '../../lib/theme-chalk/index.scss';
</style>

