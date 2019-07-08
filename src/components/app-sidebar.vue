<template>
  <div class="page-component__nav">
    <el-scrollbar tag="div" ref="scrollbar">
      <div class="side-nav">
        <ul>
          <li class="nav-item"><a @click="handleNavigationChange('changelog')" class="">更新日志</a>
          </li>
          <li class="nav-item"><a>开发指南</a>
            <ul class="pure-menu-list sub-nav">
              <li class="nav-item"><a @click="handleNavigationChange('installation')" class="router-link-exact-active active">安装</a></li>
              <!--<li class="nav-item"><a @click="handleNavigationChange('quickstart" class="">快速上手</a></li>-->
              <!--<li class="nav-item"><a @click="handleNavigationChange('i18n" class="">国际化</a></li>-->
              <!--<li class="nav-item"><a @click="handleNavigationChange('custom-theme" class="">自定义主题</a></li>-->
              <!--<li class="nav-item"><a @click="handleNavigationChange('transition" class="">内置过渡动画</a></li>-->
            </ul>
          </li>
          <li class="nav-item"><a>组件</a>
            <div class="nav-group">
              <div class="nav-group__title">Basic</div>
              <ul class="pure-menu-list">
                <!--<li class="nav-item"><a @click="handleNavigationChange('layout" class="">Layout 布局</a></li>-->
                <!--<li class="nav-item"><a @click="handleNavigationChange('container" class="">Container 布局容器</a></li>-->
                <li class="nav-item"><a @click="handleNavigationChange('color')" class="">Color 色彩</a></li>
                <!--<li class="nav-item"><a @click="handleNavigationChange('typography" class="">Typography 字体</a></li>-->
                <!--<li class="nav-item"><a @click="handleNavigationChange('icon" class="">Icon 图标</a></li>-->
                <li class="nav-item"><a @click="handleNavigationChange('border')" class="">Border 边框</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('button')" class="">Button 按钮</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('link')" class="">Link 文字链接</a></li>
              </ul>
            </div>
            <div class="nav-group">
              <div class="nav-group__title">Form</div>
              <ul class="pure-menu-list">
                <!-- <li class="nav-item"><a @click="handleNavigationChange('radio" class="">Radio 单选框</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('checkbox" class="">Checkbox 多选框</a></li> -->
                <li class="nav-item"><a @click="handleNavigationChange('radio')" class="">Radio 单选框</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('checkbox')" class="">Checkbox 多选框</a>
                <li class="nav-item"><a @click="handleNavigationChange('input')" class="">Input 输入框</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('input-number')" class="">InputNumber 计数器</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('select')" class="">Select 选择器</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('cascader')" class="">Cascader 级联选择器</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('switch')" class="">Switch 开关</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('slider')" class="">Slider 滑块</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('time-picker')" class="">TimePicker 时间选择器</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('date-picker')" class="">DatePicker 日期选择器</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('datetime-picker')" class="">DateTimePicker
                    日期时间选择器</a>
                </li>
                <li class="nav-item"><a @click="handleNavigationChange('upload')" class="">Upload 上传</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('rate')" class="">Rate 评分</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('color-picker')" class="">ColorPicker 颜色选择器</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('transfer')" class="">Transfer 穿梭框</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('form')" class="">Form 表单</a></li>
              </ul>
            </div>
            <div class="nav-group">
              <div class="nav-group__title">Data</div>
              <ul class="pure-menu-list">
                <li class="nav-item"><a @click="handleNavigationChange('table')" class="">Table 表格</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('tag')" class="">Tag 标签</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('progress')" class="">Progress 进度条</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('tree')" class="">Tree 树形控件</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('pagination')" class="">Pagination 分页</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('badge')" class="">Badge 标记</a></li>
              </ul>
            </div>
            <div class="nav-group">
              <div class="nav-group__title">Notice</div>
              <ul class="pure-menu-list">
                <li class="nav-item"><a @click="handleNavigationChange('alert')" class="">Alert 警告</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('loading')" class="">Loading 加载</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('message')" class="">Message 消息提示</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('message-box')" class="">MessageBox 弹框</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('notification')" class="">Notification 通知</a></li>
              </ul>
            </div>
            <div class="nav-group">
              <div class="nav-group__title">Navigation</div>
              <ul class="pure-menu-list">
                <li class="nav-item"><a @click="handleNavigationChange('menu')" class="">NavMenu 导航菜单</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('tabs')" class="">Tabs 标签页</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('breadcrumb')" class="">Breadcrumb 面包屑</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('dropdown')" class="">Dropdown 下拉菜单</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('steps')" class="">Steps 步骤条</a></li>
              </ul>
            </div>
            <div class="nav-group">
              <div class="nav-group__title">Others</div>
              <ul class="pure-menu-list">
                <li class="nav-item"><a @click="handleNavigationChange('dialog')" class="">Dialog 对话框</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('tooltip')" class="">Tooltip 文字提示</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('popover')" class="">Popover 弹出框</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('card')" class="">Card 卡片</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('carousel')" class="">Carousel 走马灯</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('collapse')" class="">Collapse 折叠面板</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('timeline')" class="">Timeline 时间线</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('divider')" class="">Divider 分割线</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('calendar')" class="">Calendar 日历</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('backtop')" class="">Backtop 回到顶部</a></li>
                <li class="nav-item"><a @click="handleNavigationChange('infiniteScroll')" class="">InfiniteScroll 无限滚动</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
//  import ThemeChalk from '!!raw-loader!sass-loader!./../lib/theme-chalk/index.scss'
//  import ThemeTest from '!!raw-loader!sass-loader!../lib/theme-mixiaoku/index.scss'

  export default {
    name: 'app-sidebar',
    data() {
      return {
        theme: 'chalk'
      }
    },
    watch: {
      '$route': function () {
        this.handleThemeCssChange();
      }
    },
    methods: {
      // 二次跳转-带主题标识
      redirectURL(path = this.$route.path) {
        // let query = JSON.parse(JSON.stringify(this.$route.query));
        // if (!('theme' in query)) {
        //   Object.assign(query, { theme: this.theme })
        // }
        this.$router.push({
          path: path || '/',
          // query
        })
      },
      // 导航菜单切换
      handleNavigationChange(path) {
        let theme = this.$store.getters.theme
        // 先不用pathName了,为后续国际化留个口子
        let international = 'zh-CN/' + theme + '';
        this.redirectURL(`/${international}/${path}`);
      },
      // 主题
      handleThemeCssChange() {
//        let isDev = process.env.NODE_ENV == "development";
//        let themes = {
//          chalk: isDev ? ThemeChalk : 'chalk',
//          test: isDev ? ThemeTest : 'test'
//        }
//        if (isDev) {
//          let themes = {
//            chalk: ThemeChalk,
//            test: ThemeTest
//          }
//          if (this.$route.query.theme in themes) {
//            let customStyleId = 'aigodata-style';
//            let customStyle = document.head.querySelector(`#${customStyleId}`);
//
//            if (!customStyle || customStyle.nodeType != 1) {
//              customStyle = document.createElement('style');
//              customStyle.type = 'text/css';
//              customStyle.id = customStyleId;
//              document.head.append(customStyle);
//            }
//            customStyle.innerHTML = themes[this.$route.query.theme];
//          }
//        } else {
//          if (this.$route.query.theme in themes) {
//            let {
//              host,
//              protocol,
//              pathname
//            } = window.location;
//
//            let id = 'aigodata-style';
//            let t = document.head.querySelector(`#${id}`);
//            if (!t || t.nodeType != 1) {
//              t = document.createElement('link');
//              document.head.appendChild(t);
//            }
//            t.setAttribute('id', id);
//            t.setAttribute('charset', 'utf-8');
//            t.setAttribute('rel', 'stylesheet');
//            t.setAttribute('type', 'text/css');
//            t.setAttribute('href', `${pathname}css/theme-${themes[this.$route.query.theme]}.css?${Math.random()}`);
//          }
//        }
      }
    },
    mounted() {
//      if (!('theme' in this.$route.query)) {
//        return this.redirectURL();
//      }
//      this.handleThemeCssChange();
    }
  }
</script>

<style>
  .page-component__nav .el-scrollbar {
    height: 100%;
  }
</style>
