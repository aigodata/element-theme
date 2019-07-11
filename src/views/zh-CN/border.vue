<template>
  <section class="page-border content element-doc content">
    <h2 id="border-bian-kuang">
      <a href="#button-an-niu" aria-hidden="true" class="header-anchor">¶</a>
      Border 边框
    </h2>

    <p>我们对边框进行统一规范，可用于按钮、卡片、弹窗等组件里。</p>
    <h3 id="bian-kuang">
      <a href="#bian-kuang" aria-hidden="true" class="header-anchor">¶</a>
      边框
    </h3>
    <p>我们提供了以下几种边框样式，以供选择。</p>
    <table class="demo-border">
      <tbody>
      <tr>
        <td class="text">名称</td>
        <td class="text">粗细</td>
        <td class="line">举例</td>
      </tr>
      <tr>
        <td class="text">实线</td>
        <td class="text">1px</td>
        <td class="line">
          <div></div>
        </td>
      </tr>
      <tr>
        <td class="text">虚线</td>
        <td class="text">2px</td>
        <td class="line">
          <div class="dashed"></div>
        </td>
      </tr>
      </tbody>
    </table>

    <h3 id="yuan-jiao">
      <a href="#yuan-jiao" aria-hidden="true" class="header-anchor">¶</a>
      圆角
    </h3>
    <p>我们提供了以下几种圆角样式，以供选择。</p>
    <div class="demo-radius el-row" style="margin-left: -6px; margin-right: -6px;">
      <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;">
        <div class="title">无圆角</div>
        <div class="value">border-radius: 0px</div>
        <div class="radius"></div>
      </div>
      <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;">
        <div class="title">小圆角</div>
        <div class="value">border-radius: 2px</div>
        <div class="radius" style="border-radius: 2px;"></div>
      </div>
      <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;">
        <div class="title">大圆角</div>
        <div class="value">border-radius: 4px</div>
        <div class="radius" style="border-radius: 4px;"></div>
      </div>
      <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;">
        <div class="title">圆形圆角</div>
        <div class="value">border-radius: 30px</div>
        <div class="radius radius-30"></div>
      </div>
    </div>

    <h3 id="tou-ying">
      <a href="#tou-ying" aria-hidden="true" class="header-anchor">¶</a>
      投影
    </h3>
    <p>我们提供了以下几种投影样式，以供选择。</p>
    <div class="demo-shadow demo-shadow-normal"></div>
    <span class="demo-shadow-text">白垩纪基础投影 box-shadow: 0 6px 13px rgba(126, 126, 126, .18)</span>&nbsp;&nbsp;
    <span class="demo-shadow-text" style="color: #919bb1;">日食基础投影 box-shadow: 0 5px 18px rgba(10, 15, 21, .32)</span>
    <div class="demo-shadow demo-shadow-light"></div>
    <span class="demo-shadow-text">白垩纪浅色投影 box-shadow: 0 6px 16px rgba(126, 126, 126,.08)</span>&nbsp;&nbsp;
    <span class="demo-shadow-text" style="color: #919bb1;">日食浅色投影 box-shadow: 0 5px 18px rgba(10, 15, 21, .15)</span>
  </section>
</template>

<script>
  export default {
    name: 'border'
  }
</script><!---->

<style scoped>
  .page-border {

  }

  .page-border .demo-radius .radius {
    border-color: #dbdbdb;
    -webkit-box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.2) inset,0px 3px 8px rgba(204, 204, 204, 0.3);
    box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.2) inset,0px 3px 8px rgba(204, 204, 204, 0.3);
  }

  .page-border .demo-shadow-normal {
    box-shadow: 0 6px 13px rgba(126, 126, 126, .18);
  }

  .page-border .demo-shadow-light {
    box-shadow: 0 6px 16px rgba(126, 126, 126, .08);
  }
</style>
