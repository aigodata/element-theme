<template>
  <section class="page-message">
    <h2 id="message-xiao-xi-ti-shi">
      <a href="#message-xiao-xi-ti-shi" aria-hidden="true" class="header-anchor">¶</a>
      Message 消息提示
    </h2>
    <p>常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。</p>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <p>从顶部出现，3 秒后自动消失。</p>
    <div class="demo-block demo-zh-CN demo-message">
      <div class="source">
        <el-button :plain="true" @click="open">打开消息提示</el-button>
        <el-button :plain="true" @click="openVn">VNode</el-button>
      </div>
    </div>

    <h3 id="bu-tong-zhuang-tai">
      <a href="#bu-tong-zhuang-tai" aria-hidden="true" class="header-anchor">¶</a>
      不同状态
    </h3>
    <p>用来显示「成功、警告、消息、错误」类的操作反馈。</p>
    <div class="demo-block demo-zh-CN demo-message">
      <div class="source">
        <el-button :plain="true" @click="open2">成功</el-button>
        <el-button :plain="true" @click="open3">警告</el-button>
        <el-button :plain="true" @click="open">消息</el-button>
        <el-button :plain="true" @click="open4">错误</el-button>
      </div>
    </div>

    <h3 id="ke-guan-bi">
      <a href="#ke-guan-bi" aria-hidden="true" class="header-anchor">¶</a>
      可关闭
    </h3>
    <p>可以添加关闭按钮。</p>
    <div class="demo-block demo-zh-CN demo-message">
      <div class="source">
        <el-button :plain="true" @click="open5">消息</el-button>
        <el-button :plain="true" @click="open6">成功</el-button>
        <el-button :plain="true" @click="open7">警告</el-button>
        <el-button :plain="true" @click="open8">错误</el-button>
      </div>
    </div>

    <h3 id="wen-zi-ju-zhong">
      <a href="#wen-zi-ju-zhong" aria-hidden="true" class="header-anchor">¶</a>
      文字居中
    </h3>
    <p>使用 center 属性让文字水平居中。</p>
    <div class="demo-block demo-zh-CN demo-message">
      <div class="source">
        <el-button :plain="true" @click="openCenter">文字居中</el-button>
      </div>
    </div>

    <h3 id="shi-yong-html-pian-duan">
      <a href="#shi-yong-html-pian-duan" aria-hidden="true" class="header-anchor">¶</a>
      使用 HTML 片段
    </h3>
    <p>message 属性支持传入 HTML 片段</p>
    <div class="demo-block demo-zh-CN demo-message">
      <div class="source">
        <el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'message',
    data() {
      return {}
    },
    methods: {
      open() {
        this.$message('这是一条消息提示');
      },
      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', {style: 'color: teal'}, 'VNode')
          ])
        });
      },
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      },

      open5() {
        this.$message({
          showClose: true,
          message: '这是一条消息提示'
        });
      },

      open6() {
        this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open7() {
        this.$message({
          showClose: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open8() {
        this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      },

      openCenter() {
        this.$message({
          message: '居中的文字',
          center: true
        });
      },

      openHTML() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
      }
    }
  }
</script>

<style scoped>
  .page-message {

  }
</style>
