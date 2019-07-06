<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: 'theme-mixiaoku',
    mounted() {
      document.body.setAttribute('id', 'body-theme-mixiaoku')
      // setTimeout(_ => (this.$store.commit("loading", false)), 1000)
    }
  }
</script>

<style lang="scss">
  @import '../../lib/theme-mixiaoku/index.scss';
</style>


<!-- 页面配合主题进行颜色修改 -->
<style>
  #body-theme-mixiaoku {
    /* background-color: rgba(255, 0, 0, 0.2); */
  }
</style>
