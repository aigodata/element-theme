<template>
  <section class="page-progress">
    <h2 id="progress-jin-du-tiao">
      <a href="#progress-jin-du-tiao" aria-hidden="true" class="header-anchor">¶</a>
      Progress 进度条
    </h2>
    <p>用于展示操作进度，告知用户当前状态和预期。</p>

    <h3 id="xian-xing-jin-du-tiao-bai-fen-bi-wai-xian">
      <a href="#xian-xing-jin-du-tiao-bai-fen-bi-wai-xian" aria-hidden="true" class="header-anchor">¶</a>
      线形进度条 — 百分比外显
    </h3>
    <div class="demo-block demo-zh-CN demo-progress">
      <div class="source">
        <el-progress :percentage="0"></el-progress>
        <el-progress :percentage="70"></el-progress>
        <el-progress :percentage="80" color="#8e71c7"></el-progress>
        <el-progress :percentage="100" status="success"></el-progress>
        <el-progress :percentage="50" status="exception"></el-progress>
      </div>
    </div>

    <h3 id="xian-xing-jin-du-tiao-bai-fen-bi-nei-xian">
      <a href="#xian-xing-jin-du-tiao-bai-fen-bi-nei-xian" aria-hidden="true" class="header-anchor">¶</a>
      线形进度条 — 百分比内显
    </h3>
    <p>百分比不占用额外控件，适用于文件上传等场景。</p>
    <div class="demo-block demo-zh-CN demo-progress">
      <div class="source">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
      </div>
    </div>

    <h3 id="huan-xing-jin-du-tiao">
      <a href="#huan-xing-jin-du-tiao" aria-hidden="true" class="header-anchor">¶</a>
      环形进度条
    </h3>
    <div class="demo-block demo-zh-CN demo-progress">
      <div class="source">
        <el-progress type="circle" :percentage="0"></el-progress>
        <el-progress type="circle" :percentage="25"></el-progress>
        <el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
        <el-progress type="circle" :percentage="100" status="success"></el-progress>
        <el-progress type="circle" :percentage="50" status="exception"></el-progress>
        <el-progress type="circle" :percentage="100" status="text">Done</el-progress>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'progress',
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .page-progress {

  }

  .page-progress .demo-block.demo-progress .el-progress--line {
    margin-bottom: 15px;
    width: 350px;
  }

  .page-progress .demo-block.demo-progress .el-progress--circle {
    margin-right: 15px;
  }
</style>
