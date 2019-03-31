<template>
  <section class="page-color">
    <h2 id="color-se-cai">
      <a href="#color-se-cai" aria-hidden="true" class="header-anchor">¶</a>
      Color 色彩
    </h2>
    <p>Element 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。</p>

    <h3 id="zhu-se">
      <a href="#zhu-se" aria-hidden="true" class="header-anchor">¶</a>
      主色
    </h3>
    <p>Element 主要品牌颜色是鲜艳、友好的蓝色。</p>
    <div class="demo-block demo-zh-CN demo-cascader">
      <div class="source">
        <div class="el-row" style="margin-left: -6px; margin-right: -6px;">
          <div class="el-col el-col-10 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;">
            <div class="demo-color-box" style="background: linear-gradient(to top, #2aa1ef , #3eb1fc);">
              Brand Color
              <div class="value">#2aa1ef &nbsp;&nbsp;&nbsp; #3eb1fc</div>
              <div class="bg-color-sub" style="background: rgb(165, 219, 255);">
                <div class="bg-blue-sub-item" style="background: rgb(62, 177, 252);"></div>
                <div class="bg-blue-sub-item" style="background: rgb(80, 182, 249);"></div>
                <div class="bg-blue-sub-item" style="background: rgb(90, 188, 252);"></div>
                <div class="bg-blue-sub-item" style="background: rgb(99, 193, 254);"></div>
                <div class="bg-blue-sub-item" style="background: rgb(113, 197, 252);"></div>
                <div class="bg-blue-sub-item" style="background: rgb(126, 204, 255);"></div>
                <div class="bg-blue-sub-item" style="background: rgb(139, 209, 255);"></div>
                <div class="bg-blue-sub-item" style="background: rgb(149, 213, 255);"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h3 id="fu-zhu-se">
      <a href="#fu-zhu-se" aria-hidden="true" class="header-anchor">¶</a>
      辅助色
    </h3>
    <p>除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。</p>
    <div class="demo-block demo-zh-CN demo-cascader">
      <div class="source">
        <div class="el-row" style="margin-left: -6px; margin-right: -6px;">
          <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;">
            <div class="demo-color-box" style="background: linear-gradient(to top, #45c130 , #63ce4a);">
              Success
              <div class="value">#45c130 &nbsp;&nbsp;&nbsp; #63ce4a</div>
              <div class="bg-color-sub">
                <div class="bg-success-sub-item" style="background: rgb(225, 243, 221);"></div>
                <div class="bg-success-sub-item" style="background: rgb(238, 250, 235);"></div>
              </div>
            </div>
          </div>
          <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;">
            <div class="demo-color-box" style="background: linear-gradient(to top, #fd8824 , #fd9a44);">
              Warning
              <div class="value">#fd8824 &nbsp;&nbsp;&nbsp; #fd9a44</div>
              <div class="bg-color-sub">
                <div class="bg-success-sub-item" style="background: rgb(255, 224, 197);"></div>
                <div class="bg-success-sub-item" style="background: rgb(255, 235, 217);"></div>
              </div>
            </div>
          </div>
          <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;">
            <div class="demo-color-box" style="background: linear-gradient(to top, #f85d63 , #fd787d);">
              Danger
              <div class="value">#45c130 &nbsp;&nbsp;&nbsp; #fd787d</div>
              <div class="bg-color-sub">
                <div class="bg-success-sub-item" style="background: rgb(255, 222, 223);"></div>
                <div class="bg-success-sub-item" style="background: rgb(255, 232, 233);"></div>
              </div>
            </div>
          </div>
          <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;">
            <div class="demo-color-box" style="background: linear-gradient(to top, #585b69 , #74767e);">
              Info
              <div class="value">#585b69 &nbsp;&nbsp;&nbsp; #74767e</div>
              <div class="bg-color-sub">
                <div class="bg-success-sub-item" style="background: rgb(236, 236, 236);"></div>
                <div class="bg-success-sub-item" style="background: rgb(244, 244, 244);"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h3 id="zhong-xing-se">
      <a href="#zhong-xing-se" aria-hidden="true" class="header-anchor">¶</a>
      中性色
    </h3>
    <p>中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</p>
    <div class="demo-block demo-zh-CN demo-cascader">
      <div class="source">
        <div class="el-row" style="margin-left: -6px; margin-right: -6px;">
          <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;">
            <div class="demo-color-box-group">
              <div class="demo-color-box demo-color-box-other" style="background: #333333;">
                主要文字
                <div class="value">#333333</div>
              </div>
              <div class="demo-color-box demo-color-box-other" style="background: #666666;">
                常规文字
                <div class="value">#666666</div>
              </div>
              <div class="demo-color-box demo-color-box-other" style="background: #898989;">
                次要文字
                <div class="value">#898989</div>
              </div>
              <div class="demo-color-box demo-color-box-other" style="background: #b6b6b6;">
                占位文字
                <div class="value">#b6b6b6</div>
              </div>
            </div>
          </div>
          <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;">
            <div class="demo-color-box-group">
              <div class="demo-color-box demo-color-box-other demo-color-box-lite" style="background: #dbdbdb;">
                一级边框
                <div class="value">#dbdbdb</div>
              </div>
              <div class="demo-color-box demo-color-box-other demo-color-box-lite" style="background: #e4e4e4;">
                二级边框
                <div class="value">#e4e4e4</div>
              </div>
              <div class="demo-color-box demo-color-box-other demo-color-box-lite" style="background: #ededed;">
                三级边框
                <div class="value">#ededed</div>
              </div>
              <div class="demo-color-box demo-color-box-other demo-color-box-lite" style="background: #f5f5f5;">
                四级边框
                <div class="value">#f5f5f5</div>
              </div>
            </div>
          </div>
          <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;">
            <div class="demo-color-box-group">
              <div class="demo-color-box demo-color-box-other" style="background: rgb(0, 0, 0);">
                基础黑色
                <div class="value">#000000</div>
              </div>
              <div class="demo-color-box demo-color-box-other" style="background: rgb(255, 255, 255); color: rgb(48, 49, 51); border: 1px solid rgb(238, 238, 238);">
                基础白色
                <div class="value">#ffffff</div>
              </div>
              <div class="demo-color-box demo-color-box-other bg-transparent">
                透明
                <div class="value">Transparent</div>
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

  .page-color .demo-color-box {
    position: relative;
    border-radius: 4px;
    padding: 20px;
    margin: 5px 0;
    height: 114px;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;
  }

  .page-color .bg-blue-sub-item:first-child {
    border-radius: 0 0 0 4px;
  }

  .page-color .bg-color-sub, .page-color .demo-color-box-group .demo-color-box:last-child {
    border-radius: 0 0 4px 4px;
  }

  .page-color .bg-success-sub-item {
    width: 50%;
    height: 100%;
    display: inline-block;
  }

  .page-color .bg-success-sub-item:first-child {
    border-radius: 0 0 0 4px;
  }

  .page-color .bg-success-sub-item:last-child {
    border-radius: 0 0 4px 0;
  }

  .page-color .demo-color-box-other {
    height: 74px;
    margin: 10px 0!important;
    border-radius: 4px 4px 4px 4px!important;
    padding: 15px 20px;
  }

  .page-color .bg-transparent {
    border: 1px solid #fcc3c3;
    color: #303133;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M0 98 L100 0 L100 1 L1 98' fill='%23FCC3C3' /></svg>");
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100% 100%,auto;
  }
</style>
