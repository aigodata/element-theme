<template>
  <section class="page-dialog">
    <h2 id="dialog-dui-hua-kuang">
      <a href="#dialog-dui-hua-kuang" aria-hidden="true" class="header-anchor">¶</a>
      Dialog 对话框
    </h2>
    <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>

    <h3 id="ji-ben-yong-fa">
      <a href="#ji-ben-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基本用法
    </h3>
    <p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>
    <div class="demo-block demo-zh-CN demo-dialog">
      <div class="source">
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>

    <h3 id="zi-ding-yi-nei-rong">
      <a href="#zi-ding-yi-nei-rong" aria-hidden="true" class="header-anchor">¶</a>
      自定义内容
    </h3>
    <p>Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Element Table 和 Form 组件的两个样例。</p>
    <div class="demo-block demo-zh-CN demo-dialog">
      <div class="source">
        <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

        <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
          <el-table :data="gridData">
            <el-table-column property="date" label="日期" width="150"></el-table-column>
            <el-table-column property="name" label="姓名" width="200"></el-table-column>
            <el-table-column property="address" label="地址"></el-table-column>
          </el-table>
        </el-dialog>

        <!-- Form -->
        <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>

    <h3 id="qian-tao-de-dialog">
      <a href="#qian-tao-de-dialog" aria-hidden="true" class="header-anchor">¶</a>
      嵌套的 Dialog
    </h3>
    <p>如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。</p>
    <div class="demo-block demo-zh-CN demo-dialog">
      <div class="source">
        <el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>

        <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
          <el-dialog
            width="30%"
            title="内层 Dialog"
            :visible.sync="innerVisible"
            append-to-body>
          </el-dialog>
          <div slot="footer" class="dialog-footer">
            <el-button @click="outerVisible = false">取 消</el-button>
            <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
          </div>
        </el-dialog>
      </div>
    </div>

    <h3 id="ju-zhong-bu-ju">
      <a href="#ju-zhong-bu-ju" aria-hidden="true" class="header-anchor">¶</a>
      居中布局
    </h3>
    <p>标题和底部可水平居中</p>
    <div class="demo-block demo-zh-CN demo-dialog">
      <div class="source">
        <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>

        <el-dialog
          title="提示"
          :visible.sync="centerDialogVisible"
          width="30%"
          center>
          <span>需要注意的是内容是默认不居中的</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>

    <h3 id="quan-ping-dialog">
      <a href="#quan-ping-dialog" aria-hidden="true" class="header-anchor">¶</a>
      全屏 Dialog
    </h3>
    <p>标题和底部可水平居中</p>
    <div class="demo-block demo-zh-CN demo-dialog">
      <div class="source">
        <el-button type="text" @click="isfullscreenDialogVisible = true">点击打开 Dialog</el-button>

        <el-dialog
          title="提示"
          :fullscreen="isfullscreen"
          :visible.sync="isfullscreenDialogVisible"
          width="30%"
          center>
          <span>需要注意的是内容是默认不居中的</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="isfullscreenDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="isfullscreenDialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'dialog',
    data() {
      return {
        // 基本用法
        dialogVisible: false,
        // 自定义内容
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
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        // 嵌套的 Dialog
        outerVisible: false,
        innerVisible: false,
        // 居中布局
        centerDialogVisible: false,
        // 全屏 Dialog
        isfullscreenDialogVisible: false,
        isfullscreen: true
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>

<style scoped>
  .page-dialog {

  }

  .page-dialog .demo-block.demo-dialog .el-button--text {
    margin-right: 15px;
  }
</style>
