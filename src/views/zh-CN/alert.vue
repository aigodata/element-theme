<template>
  <section class="page-alert">
    <h2 id="alert-jing-gao">
      <a href="#alert-jing-gao" aria-hidden="true" class="header-anchor">¶</a>
      Alert 警告
    </h2>
    <p>用于页面中展示重要的提示信息。</p>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <p>页面中的非浮层元素，不会自动消失。</p>
    <div class="demo-block demo-zh-CN demo-alert">
      <div class="source">
        <el-alert
          title="成功提示的文案"
          type="success">
        </el-alert>
        <el-alert
          title="消息提示的文案"
          type="info">
        </el-alert>
        <el-alert
          title="警告提示的文案"
          type="warning">
        </el-alert>
        <el-alert
          title="错误提示的文案"
          type="error">
        </el-alert>
      </div>
    </div>

    <h3 id="zi-ding-yi-guan-bi-an-niu">
      <a href="#zi-ding-yi-guan-bi-an-niu" aria-hidden="true" class="header-anchor">¶</a>
      自定义关闭按钮
    </h3>
    <p>自定义关闭按钮为文字或其他符号。</p>
    <div class="demo-block demo-zh-CN demo-alert">
      <div class="source">
        <el-alert
          title="不可关闭的 alert"
          type="success"
          :closable="false">
        </el-alert>
        <el-alert
          title="自定义 close-text"
          type="info"
          close-text="知道了">
        </el-alert>
        <el-alert
          title="设置了回调的 alert"
          type="warning"
          @close="hello">
        </el-alert>
      </div>
    </div>

    <h3 id="dai-you-icon">
      <a href="#dai-you-icon" aria-hidden="true" class="header-anchor">¶</a>
      带有 icon
    </h3>
    <p>表示某种状态时提升可读性。</p>
    <div class="demo-block demo-zh-CN demo-alert">
      <div class="source">
        <el-alert
          title="成功提示的文案"
          type="success"
          show-icon>
        </el-alert>
        <el-alert
          title="消息提示的文案"
          type="info"
          show-icon>
        </el-alert>
        <el-alert
          title="警告提示的文案"
          type="warning"
          show-icon>
        </el-alert>
        <el-alert
          title="错误提示的文案"
          type="error"
          show-icon>
        </el-alert>
      </div>
    </div>

    <h3 id="wen-zi-ju-zhong">
      <a href="#wen-zi-ju-zhong" aria-hidden="true" class="header-anchor">¶</a>
      文字居中
    </h3>
    <p>使用 center 属性让文字水平居中。</p>
    <div class="demo-block demo-zh-CN demo-alert">
      <div class="source">
        <el-alert
          title="成功提示的文案"
          type="success"
          center
          show-icon>
        </el-alert>
        <el-alert
          title="消息提示的文案"
          type="info"
          center
          show-icon>
        </el-alert>
        <el-alert
          title="警告提示的文案"
          type="warning"
          center
          show-icon>
        </el-alert>
        <el-alert
          title="错误提示的文案"
          type="error"
          center
          show-icon>
        </el-alert>
      </div>
    </div>

    <h3 id="dai-you-fu-zhu-xing-wen-zi-jie-shao">
      <a href="#dai-you-fu-zhu-xing-wen-zi-jie-shao" aria-hidden="true" class="header-anchor">¶</a>
      带有辅助性文字介绍
    </h3>
    <p>包含标题和内容，解释更详细的警告。</p>
    <div class="demo-block demo-zh-CN demo-alert">
      <div class="source">
        <el-alert
          title="带辅助性文字介绍"
          type="success"
          description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
        </el-alert>
      </div>
    </div>

    <h3 id="dai-you-icon-he-fu-zhu-xing-wen-zi-jie-shao">
      <a href="#dai-you-icon-he-fu-zhu-xing-wen-zi-jie-shao" aria-hidden="true" class="header-anchor">¶</a>
      带有 icon 和辅助性文字介绍
    </h3>
    <div class="demo-block demo-zh-CN demo-alert">
      <div class="source">
        <el-alert
          title="成功提示的文案"
          type="success"
          description="文字说明文字说明文字说明文字说明文字说明文字说明"
          show-icon>
        </el-alert>
        <el-alert
          title="消息提示的文案"
          type="info"
          description="文字说明文字说明文字说明文字说明文字说明文字说明"
          show-icon>
        </el-alert>
        <el-alert
          title="警告提示的文案"
          type="warning"
          description="文字说明文字说明文字说明文字说明文字说明文字说明"
          show-icon>
        </el-alert>
        <el-alert
          title="错误提示的文案"
          type="error"
          description="文字说明文字说明文字说明文字说明文字说明文字说明"
          show-icon>
        </el-alert>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'alert',
    data() {
      return {}
    },
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>

<style scoped>
  .page-alert {

  }

  .page-alert .demo-block.demo-alert .el-alert {
    margin: 20px 0 0;
  }
</style>
