<template>
  <section class="page-pageheader">
    <h2 id="pageheader-ye-tou">
      <a href="#pageheader-ye-tou" aria-hidden="true" class="header-anchor">¶</a>
      PageHeader 页头
    </h2>
    <p>如果页面的路径比较简单，推荐使用页头组件而非面包屑组件。</p>

    <h3 id="ji-chu">
      <a href="#ji-chu" aria-hidden="true" class="header-anchor">¶</a>
      基础
    </h3>
    <div class="demo-block demo-zh-CN demo-page-header">
      <div class="source">
        <el-page-header @back="goBack" content="详情页面">
        </el-page-header>
      </div>
    </div>
  </section>
</template>

<script>
	export default {
		name: "pageheader",
    methods: {
      goBack() {
        console.log('go back');
      }
    }
	}
</script>

<style>
  .page-pageheader {

  }
</style>
