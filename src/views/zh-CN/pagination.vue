<template>
  <section class="page-pagination">
    <h2 id="pagination-fen-ye">
      <a href="#pagination-fen-ye" aria-hidden="true" class="header-anchor">¶</a>
      Pagination 分页
    </h2>
    <p>当数据量过多时，使用分页分解数据。</p>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <p>基础的树形结构展示。</p>
    <div class="demo-block demo-zh-CN demo-pagination">
      <div class="source">
        <div class="block">
          <span class="demonstration">页数较少时的效果</span>
          <el-pagination
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">大于 7 页时的效果</span>
          <el-pagination
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>

    <h3 id="she-zhi-zui-da-ye-ma-an-niu-shu">
      <a href="#she-zhi-zui-da-ye-ma-an-niu-shu" aria-hidden="true" class="header-anchor">¶</a>
      设置最大页码按钮数
    </h3>
    <div class="demo-block demo-zh-CN demo-pagination">
      <div class="source">
        <el-pagination
          :page-size="20"
          :pager-count="11"
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>

    <h3 id="dai-you-bei-jing-se-de-fen-ye">
      <a href="#dai-you-bei-jing-se-de-fen-ye" aria-hidden="true" class="header-anchor">¶</a>
      带有背景色的分页
    </h3>
    <div class="demo-block demo-zh-CN demo-pagination">
      <div class="source">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>

    <h3 id="xiao-xing-fen-ye">
      <a href="#xiao-xing-fen-ye" aria-hidden="true" class="header-anchor">¶</a>
      小型分页
    </h3>
    <p>在空间有限的情况下，可以使用简单的小型分页。</p>
    <div class="demo-block demo-zh-CN demo-pagination">
      <div class="source">
        <el-pagination
          small
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </div>
    </div>

    <h3 id="fu-jia-gong-neng">
      <a href="#fu-jia-gong-neng" aria-hidden="true" class="header-anchor">¶</a>
      附加功能
    </h3>
    <p>根据场景需要，可以添加其他功能模块。</p>
    <div class="demo-block demo-zh-CN demo-pagination">
      <div class="source">
        <div class="block">
          <span class="demonstration">显示总数</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">调整每页显示条数</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage2"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="sizes, prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">直接前往</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">完整功能</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'pagination',
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style scoped>
  .page-pagination {

  }

  .page-pagination .demonstration {
    margin-top: 20px;
    margin-bottom: 10px;
  }
</style>
