<template>
  <section class="page-notification">
    <h2 id="notification-tong-zhi">
      <a href="#notification-tong-zhi" aria-hidden="true" class="header-anchor">¶</a>
      Notification 通知
    </h2>
    <p>悬浮出现在页面角落，显示全局的通知提醒消息。</p>

    <h3 id="ji-ben-yong-fa">
      <a href="#ji-ben-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基本用法
    </h3>
    <p>适用性广泛的通知栏</p>
    <div class="demo-block demo-zh-CN demo-notification">
      <div class="source">
        <el-button
          plain
          @click="open">
          可自动关闭
        </el-button>
        <el-button
          plain
          @click="open2">
          不会自动关闭
        </el-button>
      </div>
    </div>

    <h3 id="dai-you-qing-xiang-xing">
      <a href="#dai-you-qing-xiang-xing" aria-hidden="true" class="header-anchor">¶</a>
      带有倾向性
    </h3>
    <p>带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息</p>
    <div class="demo-block demo-zh-CN demo-notification">
      <div class="source">
        <el-button
          plain
          @click="open3">
          成功
        </el-button>
        <el-button
          plain
          @click="open4">
          警告
        </el-button>
        <el-button
          plain
          @click="open5">
          消息
        </el-button>
        <el-button
          plain
          @click="open6">
          错误
        </el-button>
      </div>
    </div>

    <h3 id="zi-ding-yi-dan-chu-wei-zhi">
      <a href="#zi-ding-yi-dan-chu-wei-zhi" aria-hidden="true" class="header-anchor">¶</a>
      自定义弹出位置
    </h3>
    <p>可以让 Notification 从屏幕四角中的任意一角弹出</p>
    <div class="demo-block demo-zh-CN demo-notification">
      <div class="source">
        <el-button
          plain
          @click="open7">
          右上角
        </el-button>
        <el-button
          plain
          @click="open8">
          右下角
        </el-button>
        <el-button
          plain
          @click="open9">
          左下角
        </el-button>
        <el-button
          plain
          @click="open10">
          左上角
        </el-button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'notification',
    data() {
      return {}
    },
    methods: {
      open() {
        const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        });
      },

      open2() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      },

      open3() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

      open4() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open5() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },

      open6() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      },

      open7() {
        this.$notify({
          title: '自定义位置',
          message: '右上角弹出的消息'
        });
      },

      open8() {
        this.$notify({
          title: '自定义位置',
          message: '右下角弹出的消息',
          position: 'bottom-right'
        });
      },

      open9() {
        this.$notify({
          title: '自定义位置',
          message: '左下角弹出的消息',
          position: 'bottom-left'
        });
      },

      open10() {
        this.$notify({
          title: '自定义位置',
          message: '左上角弹出的消息',
          position: 'top-left'
        });
      }
    }
  }
</script>

<style scoped>
  .page-notification {

  }
</style>
