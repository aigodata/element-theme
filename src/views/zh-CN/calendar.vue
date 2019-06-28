<template>
  <section class="page-calendar content element-doc content">
    <h2 id="border-bian-kuang">
      <a href="#button-an-niu" aria-hidden="true" class="header-anchor">¶</a>
      calendar 文字链接
    </h2>

    <p>文字超链接。</p>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <p>基础的文字链接用法。</p>
    <div class="demo-block demo-zh-CN demo-calendar">
      <div class="source">
        <div>
          <el-calendar href="https://element.eleme.io" target="_blank">默认链接</el-calendar>
          <el-calendar type="primary">主要链接</el-calendar>
          <el-calendar type="success">成功链接</el-calendar>
          <el-calendar type="warning">警告链接</el-calendar>
          <el-calendar type="danger">危险链接</el-calendar>
          <el-calendar type="info">信息链接</el-calendar>
        </div>
      </div>
    </div>

    <h3 id="jin-yong-zhuang-tai">
      <a href="#jin-yong-zhuang-tai" aria-hidden="true" class="header-anchor">¶</a>
      禁用状态
    </h3>
    <p>文字链接不可用状态。</p>
    <div class="demo-block demo-zh-CN demo-calendar">
      <div class="source">
        <div>
          <el-calendar disabled>默认链接</el-calendar>
          <el-calendar type="primary" disabled>主要链接</el-calendar>
          <el-calendar type="success" disabled>成功链接</el-calendar>
          <el-calendar type="warning" disabled>警告链接</el-calendar>
          <el-calendar type="danger" disabled>危险链接</el-calendar>
          <el-calendar type="info" disabled>信息链接</el-calendar>
        </div>
      </div>
    </div>

    <h3 id="xia-hua-xian">
      <a href="#xia-hua-xian" aria-hidden="true" class="header-anchor">¶</a>
      下划线
    </h3>
    <p>文字链接下划线。</p>
    <div class="demo-block demo-zh-CN demo-calendar">
      <div class="source">
        <div>
          <el-calendar :underline="false">无下划线</el-calendar>
          <el-calendar>有下划线</el-calendar>
        </div>
      </div>
    </div>

    <h3 id="tu-biao">
      <a href="#tu-biao" aria-hidden="true" class="header-anchor">¶</a>
      图标
    </h3>
    <p>带图标的文字链接可增强辨识度。</p>
    <div class="demo-block demo-zh-CN demo-calendar">
      <div class="source">
        <div>
          <el-calendar icon="el-icon-edit">编辑</el-calendar>
          <el-calendar>查看<i class="el-icon-view el-icon--right"></i> </el-calendar>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
	export default {
		name: "calendar"
	}
</script>

<style scoped>
  .page-calendar {

  }
</style>
