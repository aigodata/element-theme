<template>
  <section class="page-message-box">
    <h2 id="messagebox-dan-kuang">
      <a href="#messagebox-dan-kuang" aria-hidden="true" class="header-anchor">¶</a>
      MessageBox 弹框
    </h2>
    <p>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。</p>

    <h3 id="xiao-xi-ti-shi">
      <a href="#xiao-xi-ti-shi" aria-hidden="true" class="header-anchor">¶</a>
      消息提示
    </h3>
    <p>当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。</p>
    <div class="demo-block demo-zh-CN demo-message-box">
      <div class="source">
        <el-button type="text" @click="open">点击打开 Message Box</el-button>
      </div>
    </div>

    <h3 id="que-ren-xiao-xi">
      <a href="#que-ren-xiao-xi" aria-hidden="true" class="header-anchor">¶</a>
      确认消息
    </h3>
    <p>提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。</p>
    <div class="demo-block demo-zh-CN demo-message-box">
      <div class="source">
        <el-button type="text" @click="open2">点击打开 Message Box</el-button>
      </div>
    </div>

    <h3 id="ti-jiao-nei-rong">
      <a href="#ti-jiao-nei-rong" aria-hidden="true" class="header-anchor">¶</a>
      提交内容
    </h3>
    <p>当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。</p>
    <div class="demo-block demo-zh-CN demo-message-box">
      <div class="source">
        <el-button type="text" @click="open3">点击打开 Message Box</el-button>
      </div>
    </div>

    <h3 id="ju-zhong-bu-ju">
      <a href="#ju-zhong-bu-ju" aria-hidden="true" class="header-anchor">¶</a>
      居中布局
    </h3>
    <p>内容支持居中布局</p>
    <div class="demo-block demo-zh-CN demo-message-box">
      <div class="source">
        <el-button type="text" @click="open7">点击打开 Message Box</el-button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'message-box',
    data() {
      return {}
    },
    methods: {
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
      open2() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      open3() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      open7() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>

<style scoped>
  .page-message-box {

  }
</style>
