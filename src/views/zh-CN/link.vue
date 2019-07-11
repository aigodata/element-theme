<template>
  <section class="page-link content element-doc content">
    <h2 id="border-bian-kuang">
      <a href="#button-an-niu" aria-hidden="true" class="header-anchor">¶</a>
      Link 文字链接
    </h2>

    <p>文字超链接。</p>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <p>基础的文字链接用法。</p>
    <div class="demo-block demo-zh-CN demo-link">
      <div class="source">
        <div>
          <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
          <el-link type="primary">主要链接</el-link>
          <el-link type="success">成功链接</el-link>
          <el-link type="warning">警告链接</el-link>
          <el-link type="danger">危险链接</el-link>
          <el-link type="info">信息链接</el-link>
        </div>
      </div>
    </div>

    <h3 id="jin-yong-zhuang-tai">
      <a href="#jin-yong-zhuang-tai" aria-hidden="true" class="header-anchor">¶</a>
      禁用状态
    </h3>
    <p>文字链接不可用状态。</p>
    <div class="demo-block demo-zh-CN demo-link">
      <div class="source">
        <div>
          <el-link disabled>默认链接</el-link>
          <el-link type="primary" disabled>主要链接</el-link>
          <el-link type="success" disabled>成功链接</el-link>
          <el-link type="warning" disabled>警告链接</el-link>
          <el-link type="danger" disabled>危险链接</el-link>
          <el-link type="info" disabled>信息链接</el-link>
        </div>
      </div>
    </div>

    <h3 id="xia-hua-xian">
      <a href="#xia-hua-xian" aria-hidden="true" class="header-anchor">¶</a>
      下划线
    </h3>
    <p>文字链接下划线。</p>
    <div class="demo-block demo-zh-CN demo-link">
      <div class="source">
        <div>
          <el-link :underline="false">无下划线</el-link>
          <el-link type="primary">有下划线</el-link>
        </div>
      </div>
    </div>

    <h3 id="tu-biao">
      <a href="#tu-biao" aria-hidden="true" class="header-anchor">¶</a>
      图标
    </h3>
    <p>带图标的文字链接可增强辨识度。</p>
    <div class="demo-block demo-zh-CN demo-link">
      <div class="source">
        <div>
          <el-link icon="el-icon-edit">编辑</el-link>
          <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
        </div>
        <div>
          <el-link type="primary" icon="el-icon-edit">编辑</el-link>
          <el-link type="primary">查看<i class="el-icon-view el-icon--right"></i> </el-link>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'border'
  }
</script><!---->

<style scoped>
  .page-link {

  }

  .page-link .el-link {
    padding: 0 6px;
  }
</style>
