<template>
  <section class="page-loading">
    <h2 id="loading-jia-zai">
      <a href="#loading-jia-zai" aria-hidden="true" class="header-anchor">¶</a>
      Loading 加载
    </h2>
    <p>加载数据时显示动效。</p>

    <h3 id="qu-yu-jia-zai">
      <a href="#qu-yu-jia-zai" aria-hidden="true" class="header-anchor">¶</a>
      区域加载
    </h3>
    <p>在表格等容器中加载数据时显示。</p>
    <div class="demo-block demo-zh-CN demo-loading">
      <div class="source">
        <el-table
          v-loading="loading"
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

    <h3 id="zi-ding-yi">
      <a href="#zi-ding-yi" aria-hidden="true" class="header-anchor">¶</a>
      自定义
    </h3>
    <p>可自定义加载文案、图标和背景色。</p>
    <div class="demo-block demo-zh-CN demo-loading">
      <div class="source">
        <el-table
          v-loading="loading2"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
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

    <h3 id="zheng-ye-jia-zai">
      <a href="#zheng-ye-jia-zai" aria-hidden="true" class="header-anchor">¶</a>
      整页加载
    </h3>
    <p>页面数据加载时显示。</p>
    <div class="demo-block demo-zh-CN demo-loading">
      <div class="source">
        <el-button
          type="primary"
          @click="openFullScreen"
          v-loading.fullscreen.lock="fullscreenLoading">
          指令方式
        </el-button>
        <el-button
          type="primary"
          @click="openFullScreen2">
          服务方式
        </el-button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'loading',
    data() {
      return {
        // 区域加载
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        loading: true,
        // 自定义
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        loading2: true,
        // 整页加载
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
    }
  }
</script>

<style scoped>
  .page-loading {

  }
</style>
