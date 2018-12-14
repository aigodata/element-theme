<template>
  <div class="page-component__nav">
    <el-scrollbar tag="div" ref="scrollbar">
      <div class="side-nav">
        <ul>
          <li class="nav-item"><a href="#/zh-CN/changelog" class="">更新日志</a>
          </li>
          <li class="nav-item"><a>开发指南</a>
            <ul class="pure-menu-list sub-nav">
              <li class="nav-item"><a href="#/zh-CN/installation"
                                      class="router-link-exact-active active">安装</a></li>
              <li class="nav-item"><a href="#/zh-CN/quickstart" class="">快速上手</a></li>
              <li class="nav-item"><a href="#/zh-CN/i18n" class="">国际化</a></li>
              <li class="nav-item"><a href="#/zh-CN/custom-theme" class="">自定义主题</a></li>
              <li class="nav-item"><a href="#/zh-CN/transition" class="">内置过渡动画</a></li>
            </ul>
          </li>
          <li class="nav-item"><a>组件</a>
            <div class="nav-group">
              <div class="nav-group__title">Basic</div>
              <ul class="pure-menu-list">
                <li class="nav-item"><a href="#/zh-CN/layout" class="">Layout 布局</a></li>
                <li class="nav-item"><a href="#/zh-CN/container" class="">Container 布局容器</a></li>
                <li class="nav-item"><a href="#/zh-CN/color" class="">Color 色彩</a></li>
                <li class="nav-item"><a href="#/zh-CN/typography" class="">Typography 字体</a></li>
                <li class="nav-item"><a href="#/zh-CN/icon" class="">Icon 图标</a></li>
                <li class="nav-item"><a href="#/zh-CN/button" class="">Button 按钮</a></li>
              </ul>
            </div>
            <div class="nav-group">
              <div class="nav-group__title">Form</div>
              <ul class="pure-menu-list">
                <li class="nav-item"><a href="#/zh-CN/radio" class="">Radio 单选框</a></li>
                <li class="nav-item"><a href="#/zh-CN/checkbox" class="">Checkbox 多选框</a></li>
                <li class="nav-item"><a href="#/zh-CN/input" class="">Input 输入框</a></li>
                <li class="nav-item"><a href="#/zh-CN/input-number" class="">InputNumber 计数器</a></li>
                <li class="nav-item"><a href="#/zh-CN/select" class="">Select 选择器</a></li>
                <li class="nav-item"><a href="#/zh-CN/cascader" class="">Cascader 级联选择器</a></li>
                <li class="nav-item"><a href="#/zh-CN/switch" class="">Switch 开关</a></li>
                <li class="nav-item"><a href="#/zh-CN/slider" class="">Slider 滑块</a></li>
                <li class="nav-item"><a href="#/zh-CN/time-picker" class="">TimePicker 时间选择器</a></li>
                <li class="nav-item"><a href="#/zh-CN/date-picker" class="">DatePicker 日期选择器</a></li>
                <li class="nav-item"><a href="#/zh-CN/datetime-picker" class="">DateTimePicker 日期时间选择器</a>
                </li>
                <li class="nav-item"><a href="#/zh-CN/upload" class="">Upload 上传</a></li>
                <li class="nav-item"><a href="#/zh-CN/rate" class="">Rate 评分</a></li>
                <li class="nav-item"><a href="#/zh-CN/color-picker" class="">ColorPicker 颜色选择器</a></li>
                <li class="nav-item"><a href="#/zh-CN/transfer" class="">Transfer 穿梭框</a></li>
                <li class="nav-item"><a href="#/zh-CN/form" class="">Form 表单</a></li>
              </ul>
            </div>
            <div class="nav-group">
              <div class="nav-group__title">Data</div>
              <ul class="pure-menu-list">
                <li class="nav-item"><a href="#/zh-CN/table" class="">Table 表格</a></li>
                <li class="nav-item"><a href="#/zh-CN/tag" class="">Tag 标签</a></li>
                <li class="nav-item"><a href="#/zh-CN/progress" class="">Progress 进度条</a></li>
                <li class="nav-item"><a href="#/zh-CN/tree" class="">Tree 树形控件</a></li>
                <li class="nav-item"><a href="#/zh-CN/pagination" class="">Pagination 分页</a></li>
                <li class="nav-item"><a href="#/zh-CN/badge" class="">Badge 标记</a></li>
              </ul>
            </div>
            <div class="nav-group">
              <div class="nav-group__title">Notice</div>
              <ul class="pure-menu-list">
                <li class="nav-item"><a href="#/zh-CN/alert" class="">Alert 警告</a></li>
                <li class="nav-item"><a href="#/zh-CN/loading" class="">Loading 加载</a></li>
                <li class="nav-item"><a href="#/zh-CN/message" class="">Message 消息提示</a></li>
                <li class="nav-item"><a href="#/zh-CN/message-box" class="">MessageBox 弹框</a></li>
                <li class="nav-item"><a href="#/zh-CN/notification" class="">Notification 通知</a></li>
              </ul>
            </div>
            <div class="nav-group">
              <div class="nav-group__title">Navigation</div>
              <ul class="pure-menu-list">
                <li class="nav-item"><a href="#/zh-CN/menu" class="">NavMenu 导航菜单</a></li>
                <li class="nav-item"><a href="#/zh-CN/tabs" class="">Tabs 标签页</a></li>
                <li class="nav-item"><a href="#/zh-CN/breadcrumb" class="">Breadcrumb 面包屑</a></li>
                <li class="nav-item"><a href="#/zh-CN/dropdown" class="">Dropdown 下拉菜单</a></li>
                <li class="nav-item"><a href="#/zh-CN/steps" class="">Steps 步骤条</a></li>
              </ul>
            </div>
            <div class="nav-group">
              <div class="nav-group__title">Others</div>
              <ul class="pure-menu-list">
                <li class="nav-item"><a href="#/zh-CN/dialog" class="">Dialog 对话框</a></li>
                <li class="nav-item"><a href="#/zh-CN/tooltip" class="">Tooltip 文字提示</a></li>
                <li class="nav-item"><a href="#/zh-CN/popover" class="">Popover 弹出框</a></li>
                <li class="nav-item"><a href="#/zh-CN/card" class="">Card 卡片</a></li>
                <li class="nav-item"><a href="#/zh-CN/carousel" class="">Carousel 走马灯</a></li>
                <li class="nav-item"><a href="#/zh-CN/collapse" class="">Collapse 折叠面板</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
  export default {
    name: 'app-sidebar',
  }
</script>

<style>
  .page-component__nav .el-scrollbar {
    height: 100%;
  }
</style>
