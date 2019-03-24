<template>
  <section class="page-breadcrumb">
    <h2 id="breadcrumb-mian-bao-xie">
      <a href="#breadcrumb-mian-bao-xie" aria-hidden="true" class="header-anchor">¶</a>
      Breadcrumb 面包屑
    </h2>
    <p>显示当前页面的路径，快速返回之前的任意页面。</p>

    <h3 id="ji-ben-yong-fa">
      <a href="#ji-ben-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基本用法
    </h3>
    <p>适用广泛的基础用法。</p>
    <div class="demo-block demo-zh-CN demo-tabs">
      <div class="source">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <h3 id="tu-biao-fen-ge-fu">
      <a href="#tu-biao-fen-ge-fu" aria-hidden="true" class="header-anchor">¶</a>
      图标分隔符
    </h3>
    <div class="demo-block demo-zh-CN demo-tabs">
      <div class="source">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'breadcrumb',
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .page-breadcrumb {

  }
</style>
