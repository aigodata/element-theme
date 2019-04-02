<template>
  <div class="headerWrapper">
    <header class="header">
      <div class="container">
        <h1>
          <a href="http://element-cn.eleme.io/#/zh-CN" target="_blank" class="router-link-active">
            <img src="../assets/logo.svg" alt="element-logo" class="nav-logo">
          </a>
          <img src="../assets/clothes.svg" class="clothes">
          <a href="https://github.com/aigodata" target="_blank" class="aigodata-logo">
            <img src="../assets/aigodata-logo.svg">
          </a>
        </h1>
        <a href="https://github.com/aigodata/element-theme" target="_blank" title="访问github" class="github-logo">
          <img src="../assets/github.png">
        </a>
        <ul class="nav">
          <li class="nav-item nav-versions">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link link-font">
                2.7.0<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>2.7.0</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
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
  .headerWrapper .header {
    -webkit-box-shadow: 0px 2px 8px rgba(204, 204, 204, 0.4);
    box-shadow: 0px 2px 8px rgba(204, 204, 204, 0.4);
  }

  .headerWrapper .header .github-logo {
    float: right;
    margin: 8px 0 0 30px;
  }

  .headerWrapper .header .github-logo img {
    width: 30px;
  }

  .headerWrapper .link-font {
    color: #888;
    font-size: 16px;
  }

  .headerWrapper .header .nav-item {
    color: #888;
  }

  .headerWrapper .router-link-active {
    float: left;
  }

  .headerWrapper .clothes {
    width: 25px;
    float: left;
    margin: 28px 0 0 27px;
  }

  .headerWrapper .aigodata-logo {
    float: left;
  }

  .headerWrapper .aigodata-logo img {
    width: 150px;
    margin: 0 0 0 27px;
  }
</style>
