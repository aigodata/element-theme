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
     background-color: #1a2029;
  }

  /* 侧边栏 */

  #body-theme-mixiaoku .side-nav .nav-item .nav-item a {
    color: #ffffff;
    cursor: pointer;
  }

  #body-theme-mixiaoku .side-nav .nav-item .nav-item a:hover {
    color: #325cd8;
  }

  #body-theme-mixiaoku .side-nav .nav-item a {
    color: #ffffff;
  }

  #body-theme-mixiaoku .page-container h2, #body-theme-mixiaoku .page-container h3, #body-theme-mixiaoku .page-container h4, #body-theme-mixiaoku .page-container h5 {
    color: #ffffff;
  }

  #body-theme-mixiaoku .page-container p {
    color: #919bb1;
  }

  #body-theme-mixiaoku .demo-block {
    border-color: rgba(255, 255, 255, 0.3);
  }

  /* 头部 */
  #body-theme-mixiaoku .headerWrapper .header {
    background-color: #151a20;
    box-shadow: none;
    border-bottom: 3px solid #325cd8;
  }

  #body-theme-mixiaoku .headerWrapper .header .nav-item {
    color: #ffffff;
  }

  #body-theme-mixiaoku .headerWrapper .header .nav-item:hover, #body-theme-mixiaoku .headerWrapper .header .nav-item.active {
    color: #549ef8;
  }

  #body-theme-mixiaoku .headerWrapper .header .github-logo {
    background: url("../../assets/github-white.png") no-repeat;
  }

  /* border页面样式覆盖 */
  #body-theme-mixiaoku .page-component .content > table {
    background-color: rgba(0, 0, 0, 0);
  }

  #body-theme-mixiaoku .page-component .content > table td {
    color: #ffffff;
  }

  #body-theme-mixiaoku .demo-border .line div {
    border-top: 1px solid #333a46;
  }

  #body-theme-mixiaoku .demo-border .line .dashed {
    border-top: 2px dashed #333a46;
  }

  #body-theme-mixiaoku .demo-radius .radius {
    border-color: #474e59;
  }

  #body-theme-mixiaoku .page-border .demo-radius .radius {
    box-shadow: none;
  }

  #body-theme-mixiaoku .demo-shadow {
    border: none;
    background-color: #2a3039;
  }

  #body-theme-mixiaoku .demo-shadow.demo-shadow-normal {
    box-shadow: 0 5px 18px rgba(10, 15, 21, .32);
  }

  #body-theme-mixiaoku .demo-shadow-light {
    box-shadow: 0 5px 18px rgba(10, 15, 21, .15);
  }

  #body-theme-mixiaoku .demo-radius .value {
    color: #919bb1;
  }
</style>
