<template>
  <section class="page-alert">
    <h2 id="alert-jing-gao">
      <a href="#drawer-chou-ti" aria-hidden="true" class="header-anchor">¶</a>
      Drawer 抽屉
    </h2>
    <p>有些时候, Dialog 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, Drawer 拥有和 Dialog 几乎相同的 API, 在 UI 上带来不一样的体验。</p>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <p>呼出一个临时的侧边栏, 可以从多个方向呼出。</p>
    <div class="demo-block demo-zh-CN demo-alert">
      <div class="source">
        <el-radio-group v-model="direction">
          <el-radio label="ltr">从左往右开</el-radio>
          <el-radio label="rtl">从右往左开</el-radio>
          <el-radio label="ttb">从上往下开</el-radio>
          <el-radio label="btt">从下往上开</el-radio>
        </el-radio-group>

        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
          点我打开
        </el-button>

        <el-drawer
          title="我是标题"
          :visible.sync="drawer"
          :direction="direction"
          :before-close="handleClose">
          <span>我来啦!</span>
        </el-drawer>
      </div>
    </div>

    <h3 id="zi-ding-yi-nei-rong">
      <a href="#zhu-ti" aria-hidden="true" class="header-anchor">¶</a>
      自定义内容
    </h3>
    <p>A和 Dialog 组件一样, Drawer 同样可以在其内部嵌套各种丰富的操作</p>
    <div class="demo-block demo-zh-CN demo-alert">
      <div class="source">
        <el-button type="text" @click="table = true">打开嵌套表格的 Drawer</el-button>
        <el-button type="text" @click="dialog = true">打开嵌套 Form 的 Drawer</el-button>
        <el-drawer
          title="我嵌套了表格!"
          :visible.sync="table"
          direction="rtl"
          size="50%">
          <el-table :data="gridData">
            <el-table-column property="date" label="日期" width="150"></el-table-column>
            <el-table-column property="name" label="姓名" width="200"></el-table-column>
            <el-table-column property="address" label="地址"></el-table-column>
          </el-table>
        </el-drawer>

        <el-drawer
          title="我嵌套了 Form !"
          :before-close="handleClose01"
          :visible.sync="dialog"
          direction="ltr"
          custom-class="demo-drawer"
          ref="drawer"
        >
          <div class="demo-drawer__content">
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
            <div class="demo-drawer__footer">
              <el-button @click="dialog = false">取 消</el-button>
              <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
            </div>
          </div>
        </el-drawer>
      </div>
    </div>

    <h3 id="duo-ceng-qian-tao">
      <a href="#zhu-ti" aria-hidden="true" class="header-anchor">¶</a>
      多层嵌套
    </h3>
    <p>Drawer 组件也拥有多层嵌套的方法</p>
    <div class="demo-block demo-zh-CN demo-alert">
      <div class="source">
        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
          点我打开
        </el-button>

        <el-drawer
          title="我是外面的 Drawer"
          :visible.sync="drawer"
          size="50%">
          <div>
            <el-button @click="innerDrawer = true">打开里面的!</el-button>
            <el-drawer
              title="我是里面的"
              :append-to-body="true"
              :before-close="handleClose02"
              :visible.sync="innerDrawer">
              <p>_(:зゝ∠)_</p>
            </el-drawer>
          </div>
        </el-drawer>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'alert',
    data() {
      return {
        drawer: false,
        innerDrawer: false,
        direction: 'rtl',
        table: false,
        dialog: false,
        loading: false,
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
        formLabelWidth: '80px'
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleClose01(done) {
        this.$confirm('确定要提交表单吗？')
          .then(_ => {
            this.loading = true;
            setTimeout(() => {
              this.loading = false;
              done();
            }, 2000);
          })
          .catch(_ => {});
      },
      handleClose02(done) {
        this.$confirm('还有未保存的工作哦确定关闭吗？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
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
