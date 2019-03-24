<template>
  <section class="page-popover">
    <h2 id="popover-dan-chu-kuang">
      <a href="#popover-dan-chu-kuang" aria-hidden="true" class="header-anchor">¶</a>
      Popover 弹出框
    </h2>

    <h3 id="ji-ben-yong-fa">
      <a href="#ji-ben-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基本用法
    </h3>
    <p>Popover 的属性与 Tooltip 很类似，它们都是基于Vue-popper开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。</p>
    <div class="demo-block demo-zh-CN demo-popover">
      <div class="source">
        <div class="box">
          <el-popover
            placement="top-start"
            title="标题"
            width="200"
            trigger="hover"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <el-button slot="reference">hover 激活</el-button>
          </el-popover>

          <el-popover
            placement="bottom"
            title="标题"
            width="200"
            trigger="click"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <el-button slot="reference">click 激活</el-button>
          </el-popover>

          <el-popover
            ref="popover"
            placement="right"
            title="标题"
            width="200"
            trigger="focus"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
          </el-popover>
          <el-button v-popover:popover>focus 激活</el-button>

          <el-popover
            placement="bottom"
            title="标题"
            width="200"
            trigger="manual"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
            v-model="visible">
            <el-button slot="reference" @click="visible = !visible">手动激活</el-button>
          </el-popover>
        </div>
      </div>
    </div>

    <h3 id="qian-tao-xin-xi">
      <a href="#qian-tao-xin-xi" aria-hidden="true" class="header-anchor">¶</a>
      嵌套信息
    </h3>
    <p>可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。</p>
    <div class="demo-block demo-zh-CN demo-popover">
      <div class="source">
        <el-popover
          placement="right"
          width="400"
          trigger="click">
          <el-table :data="gridData">
            <el-table-column width="150" property="date" label="日期"></el-table-column>
            <el-table-column width="100" property="name" label="姓名"></el-table-column>
            <el-table-column width="300" property="address" label="地址"></el-table-column>
          </el-table>
          <el-button slot="reference">click 激活</el-button>
        </el-popover>
      </div>
    </div>

    <h3 id="qian-tao-cao-zuo">
      <a href="#qian-tao-cao-zuo" aria-hidden="true" class="header-anchor">¶</a>
      嵌套操作
    </h3>
    <p>当然，你还可以嵌套操作，这相比 Dialog 更为轻量：</p>
    <div class="demo-block demo-zh-CN demo-popover">
      <div class="source">
        <el-popover
          placement="top"
          width="160"
          v-model="visible2">
          <p>这是一段内容这是一段内容确定删除吗？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" @click="visible2 = false">取消</el-button>
            <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
          </div>
          <el-button slot="reference">删除</el-button>
        </el-popover>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'popover',
    data() {
      return {
        visible: false,
        // 嵌套信息
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        // 嵌套操作
        visible2: false
      }
    }
  }
</script>

<style scoped>
  .page-popover {

  }

  .page-popover .demo-block.demo-popover .el-button {
    margin-left: 10px;
  }
</style>
