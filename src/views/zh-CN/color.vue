<template>
  <section class="page-color">
    <h2 id="color-se-cai">
      <a href="#color-se-cai" aria-hidden="true" class="header-anchor">¶</a>
      Color 色彩
    </h2>
    <p>Element 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。</p>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <div class="demo-block demo-zh-CN demo-cascader">
      <div class="source">
        <div class="el-row" style="margin-left: -6px; margin-right: -6px;">
          <div class="el-col el-col-10 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;">
            <div class="demo-color-box" style="background: rgb(64, 158, 255);">
              Brand Color
              <div class="value">#409EFF</div>
              <div class="bg-color-sub" style="background: rgb(236, 245, 255);">
                <div class="bg-blue-sub-item" style="background: rgb(83, 168, 255);"></div>
                <div class="bg-blue-sub-item" style="background: rgb(102, 177, 255);"></div>
                <div class="bg-blue-sub-item" style="background: rgb(121, 187, 255);"></div>
                <div class="bg-blue-sub-item" style="background: rgb(140, 197, 255);"></div>
                <div class="bg-blue-sub-item" style="background: rgb(160, 207, 255);"></div>
                <div class="bg-blue-sub-item" style="background: rgb(179, 216, 255);"></div>
                <div class="bg-blue-sub-item" style="background: rgb(198, 226, 255);"></div>
                <div class="bg-blue-sub-item" style="background: rgb(217, 236, 255);"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'color'
  }
</script>

<style scoped>
  .page-color {

  }

  .page-color .bg-color-sub {
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    position: absolute;
  }

  .page-color .bg-blue-sub-item {
    width: 11.1111111%;
    height: 100%;
    display: inline-block;
  }
</style>
