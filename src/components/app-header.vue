<template>
  <div class="headerWrapper">
    <header class="header">
      <div class="container">
        <h1>
          <a href="http://element-cn.eleme.io/#/zh-CN" target="_blank" class="router-link-active">
            <img src="../assets/logo.svg" alt="element-logo" class="nav-logo">
            <span class="version">{{ version }}</span>
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
          <!--<li class="nav-item nav-versions">-->
          <!--<el-dropdown trigger="click">-->
          <!--<span class="el-dropdown-link link-font">-->
          <!--2.7.0<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
          <!--</span>-->
          <!--<el-dropdown-menu slot="dropdown">-->
          <!--<el-dropdown-item>2.7.0</el-dropdown-item>-->
          <!--</el-dropdown-menu>-->
          <!--</el-dropdown>-->
          <!--</li>-->
          <li class="nav-item" @click="changeTheme('theme-chalk')" :class="{active: $store.getters.theme === 'theme-chalk'}">
            白垩纪
          </li>
          <li class="nav-item" @click="changeTheme('theme-mixiaoku')" :class="{active: $store.getters.theme === 'theme-mixiaoku'}">
            日食
          </li>
        </ul>

      </div>
    </header>
  </div>
</template>

<script>
  import { version } from '../../package.json'
  export default {
    name: 'app-header',
    data() {
      return {
        version: version
      }
    },
    methods: {
      changeTheme(theme, isLoad) {
        if (theme === this.$store.getters.theme && !isLoad) return
        this.$store.commit("theme", theme);
        let pathName = location.pathname
        let origin = location.origin
        let paths = this.$route.path.split('/');
        let currentModule = paths[paths.length - 1];
        if (process.env.NODE_ENV === "production") {
          let id = 'aigodata-element-theme';
          let link = document.querySelector(`#${id}`);
          // 不存在新增
          if (!link) {
            link = document.createElement('link');
            document.head.appendChild(link);
            link.setAttribute('id', id);
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('charset', 'utf-8');
            link.setAttribute('type', 'text/css');
          }
          link.setAttribute('href', `${pathName}lib/${theme}/index.css?random=${Date.now()}`);
          this.$store.commit("loading", true);
          this.$router.push(`/zh-CN/${theme}/${currentModule}`)
        } else {
            location.href = `${origin}${pathName}${'?' + 'random=' + Date.now()}#/zh-CN/${theme}/${currentModule}`;
        }
      }
    },
    mounted() {
      let theme = this.$store.getters.theme;
      if (!theme) {
        theme = 'theme-chalk';
        this.$store.commit("theme", theme);
      }
      document.body.setAttribute('id', 'body-' + theme)
      if (process.env.NODE_ENV === "production") {
        this.changeTheme(theme, true);
      }
    }
  }
</script>

<style>
  .headerWrapper .header {
    -webkit-box-shadow: 0px 2px 8px rgba(204, 204, 204, 0.4);
    box-shadow: 0px 2px 8px rgba(204, 204, 204, 0.4);
    background-color: #fff;
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 80px;
    z-index: 100;
    position: relative;
  }

  .headerWrapper .header .version {
    font-size: 14px;
    padding-left: 5px;
  }

  .headerWrapper .header .nav-item {
    color: #888;
    padding: 0 10px;
  }

  .headerWrapper .header .nav-item:hover,
  .headerWrapper .header .nav-item.active {
    color: #549ef8;
  }

  .headerWrapper .header .nav-item {
    margin: 0;
    float: left;
    list-style: none;
    position: relative;
    cursor: pointer;
  }

  .header,
  .headerWrapper {
    height: 80px;
  }

  .headerWrapper .header .nav-logo,
  .headerWrapper .header .nav-logo-small {
    vertical-align: sub;
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

  .headerWrapper .header h1 {
    margin: 0;
    float: left;
    font-size: 32px;
    font-weight: 400;
  }

  .headerWrapper .header .nav {
    float: right;
    height: 100%;
    line-height: 80px;
    background: transparent;
    padding: 0;
    margin: 0;
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
