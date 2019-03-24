<template>
  <section class="page-tooltip">
    <h2 id="tooltip-wen-zi-ti-shi">
      <a href="#tooltip-wen-zi-ti-shi" aria-hidden="true" class="header-anchor">¶</a>
      Tooltip 文字提示
    </h2>
    <p>常用于展示鼠标 hover 时的提示信息。</p>

    <h3 id="ji-ben-yong-fa">
      <a href="#ji-ben-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基本用法
    </h3>
    <p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>
    <div class="demo-block demo-zh-CN demo-tooltip">
      <div class="source">
        <div class="box">
          <div class="top">
            <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
              <el-button>上左</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
              <el-button>上边</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
              <el-button>上右</el-button>
            </el-tooltip>
          </div>
          <div class="left">
            <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
              <el-button>左上</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
              <el-button>左边</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
              <el-button>左下</el-button>
            </el-tooltip>
          </div>

          <div class="right">
            <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
              <el-button>右上</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
              <el-button>右边</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
              <el-button>右下</el-button>
            </el-tooltip>
          </div>
          <div class="bottom">
            <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
              <el-button>下左</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
              <el-button>下边</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
              <el-button>下右</el-button>
            </el-tooltip>
          </div>
        </div>
      </div>
    </div>

    <h3 id="zhu-ti">
      <a href="#zhu-ti" aria-hidden="true" class="header-anchor">¶</a>
      主题
    </h3>
    <p>Tooltip 组件提供了两个不同的主题：dark和light。</p>
    <div class="demo-block demo-zh-CN demo-tooltip">
      <div class="source">
        <el-tooltip content="Top center" placement="top">
          <el-button>Dark</el-button>
        </el-tooltip>
        <el-tooltip content="Bottom center" placement="bottom" effect="light">
          <el-button>Light</el-button>
        </el-tooltip>
      </div>
    </div>

    <h3 id="geng-duo-content">
      <a href="#geng-duo-content" aria-hidden="true" class="header-anchor">¶</a>
      更多 Content
    </h3>
    <p>展示多行文本或者是设置文本内容的格式</p>
    <div class="demo-block demo-zh-CN demo-tooltip">
      <div class="source">
        <el-tooltip placement="top">
          <div slot="content">多行信息<br/>第二行信息</div>
          <el-button>Top center</el-button>
        </el-tooltip>
      </div>
    </div>

    <h3 id="gao-ji-kuo-zhan">
      <a href="#gao-ji-kuo-zhan" aria-hidden="true" class="header-anchor">¶</a>
      高级扩展
    </h3>
    <div class="demo-block demo-zh-CN demo-tooltip">
      <div class="source">
        <el-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
          <el-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</el-button>
        </el-tooltip>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'tooltip',
    data() {
      return {
        disabled: false
      }
    }
  }
</script>

<style scoped>
  .page-tooltip {

  }

  .page-tooltip .box {
    width: 400px;
  }

  .page-tooltip .box .top {
    text-align: center;
  }

  .page-tooltip .box .left {
    float: left;
    width: 60px;
  }

  .page-tooltip .box .right {
    float: right;
    width: 60px;
  }

  .page-tooltip .box .bottom {
    clear: both;
    text-align: center;
  }

  .page-tooltip .box .item {
    margin: 4px;
  }

  .page-tooltip .box .left .el-tooltip__popper,
  .page-tooltip .box .right .el-tooltip__popper {
    padding: 8px 10px;
  }
</style>
