<template>
  <div id="app" class="is-component">
    <!-- 头部 -->
    <app-header></app-header>
    <div class="main-cnt">
      <div class="page-component__scroll">
        <el-scrollbar tag="div" ref="scrollbar">
          <div class="page-container page-component">
            <!-- 导航侧边栏 -->
            <app-sidebar></app-sidebar>
            <div class="page-component__content">
              <!-- 切换页面 -->
              <router-view></router-view>
            </div>
          </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
  import '@/assets/docs.css'
  import '@/assets/zh-CN.css'
  import appHeader from '@/components/app-header.vue'
  import appSidebar from '@/components/app-sidebar.vue'

  export default {
    name: 'app',
    components: {
      appHeader,
      appSidebar
    }
  }
</script>

<style lang="scss">
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .page-component__scroll {
    height: calc(100% - 80px);
    margin-top: 80px
  }

  .page-component__scroll > .el-scrollbar {
    height: 100%;
  }

  .page-component__scroll .el-scrollbar__wrap {
    overflow-x: auto
  }

  .page-component {
    box-sizing: border-box;
    height: 100%
  }

  .page-component .page-component__nav {
    width: 240px;
    position: fixed;
    top: 0;
    bottom: 0;
    margin-top: 80px;
    transition: padding-top .3s
  }

  .page-component .page-component__nav .el-scrollbar__wrap {
    height: 100%
  }

  .page-component .page-component__nav.is-extended {
    padding-top: 0
  }

  .page-component .side-nav {
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-right: 0
  }

  .page-component .side-nav > ul {
    padding-bottom: 50px
  }

  .page-component .page-component__content {
    padding-left: 270px;
    padding-bottom: 100px;
    box-sizing: border-box
  }

  .page-component .content {
    padding-top: 50px
  }

  .page-component .content > h3 {
    margin: 55px 0 20px
  }

  .page-component .content > table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em
  }

  .page-component .content > table strong {
    font-weight: 400
  }

  .page-component .content > table td, .page-component .content > table th {
    border-bottom: 1px solid #d8d8d8;
    padding: 15px;
    max-width: 250px
  }

  .page-component .content > table th {
    text-align: left;
    white-space: nowrap;
    color: #666;
    font-weight: 400
  }

  .page-component .content > table td {
    color: #333
  }

  .page-component .content > table td:first-child, .page-component .content > table th:first-child {
    padding-left: 10px
  }

  .page-component .content > ul:not(.timeline) {
    margin: 10px 0;
    padding: 0 0 0 20px;
    font-size: 14px;
    color: #5e6d82;
    line-height: 2em
  }

  .page-component .page-component-up {
    background-color: #fff;
    position: fixed;
    right: 100px;
    bottom: 150px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    transition: .3s;
    box-shadow: 0 0 6px rgba(0, 0, 0, .12);
    z-index: 5
  }

  .page-component .page-component-up i {
    color: #409eff;
    display: block;
    line-height: 40px;
    text-align: center;
    font-size: 18px
  }

  .page-component .page-component-up.hover {
    opacity: 1
  }

  .page-component .back-top-fade-enter, .page-component .back-top-fade-leave-active {
    -ms-transform: translateY(-30px);
    transform: translateY(-30px);
    opacity: 0
  }

  .page-component.page-container {
    padding: 0
  }

  @media (max-width: 768px) {
    .page-component .page-component__nav {
      width: 100%;
      position: static;
      margin-top: 0
    }
    .page-component .side-nav {
      padding-top: 0;
      padding-left: 50px
    }
    .page-component .page-component__content {
      padding-left: 10px;
      padding-right: 10px
    }
    .page-component .content {
      padding-top: 0
    }
    .page-component .content > table {
      overflow: auto;
      display: block
    }
    .page-component .page-component-up {
      display: none
    }
  }
</style>

