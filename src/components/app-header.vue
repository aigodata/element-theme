<template>
  <div class="headerWrapper">
    <header class="header">
      <div class="container">
        <h1>
          <a href="http://element-cn.eleme.io/#/zh-CN" target="_blank" class="router-link-active">
            <img src="../assets/logo.svg" alt="element-logo" class="nav-logo">
          </a>
        </h1>
        <ul class="nav">

          <li class="nav-item nav-versions">
            版本
          </li>
          <li class="nav-item lang-item">
            语言
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'app-header',
  }
</script>

<style>
  .headerWrapper .nav {
    color: #888;
  }
</style>
