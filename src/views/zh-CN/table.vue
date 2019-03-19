<template>
  <section class="page-table">
    <h2 id="table-biao-ge">
      <a href="#table-biao-ge" aria-hidden="true" class="header-anchor">¶</a>
      Table 表格
    </h2>
    <p>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</p>

    <h3 id="ji-chu-biao-ge">
      <a href="#ji-chu-biao-ge" aria-hidden="true" class="header-anchor">¶</a>
      基础表格
    </h3>
    <p>基础的表格展示用法。</p>
    <div class="demo-block demo-zh-CN demo-table">
      <div class="source">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'table',
    data() {
      return {
        // 基础表格
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>

<style scoped>
  .page-table {

  }
</style>
