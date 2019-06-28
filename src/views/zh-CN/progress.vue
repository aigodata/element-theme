<template>
  <section class="page-progress">
    <h2 id="progress-jin-du-tiao">
      <a href="#progress-jin-du-tiao" aria-hidden="true" class="header-anchor">¶</a>
      Progress 进度条
    </h2>
    <p>用于展示操作进度，告知用户当前状态和预期。</p>

    <h3 id="xian-xing-jin-du-tiao-bai-fen-bi-wai-xian">
      <a href="#xian-xing-jin-du-tiao-bai-fen-bi-wai-xian" aria-hidden="true" class="header-anchor">¶</a>
      线形进度条 — 百分比外显
    </h3>
    <div class="demo-block demo-zh-CN demo-progress">
      <div class="source">
        <el-progress :percentage="0"></el-progress>
        <el-progress :percentage="70"></el-progress>
        <el-progress :percentage="80" color="#8e71c7"></el-progress>
        <el-progress :percentage="100" status="success"></el-progress>
        <el-progress :percentage="50" status="exception"></el-progress>
      </div>
    </div>

    <h3 id="xian-xing-jin-du-tiao-bai-fen-bi-nei-xian">
      <a href="#xian-xing-jin-du-tiao-bai-fen-bi-nei-xian" aria-hidden="true" class="header-anchor">¶</a>
      线形进度条 — 百分比内显
    </h3>
    <p>百分比不占用额外控件，适用于文件上传等场景。</p>
    <div class="demo-block demo-zh-CN demo-progress">
      <div class="source">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
      </div>
    </div>

    <h3 id="zi-ding-yi-yan-se">
      <a href="#zi-ding-yi-yan-se" aria-hidden="true" class="header-anchor">¶</a>
      自定义颜色
    </h3>
    <p>可以通过 color 设置进度条的颜色，color 可以接受颜色字符串，函数和数组。</p>
    <div class="demo-block demo-zh-CN demo-progress">
      <div class="source">
        <el-progress :percentage="percentage" :color="customColor"></el-progress>

        <el-progress :percentage="percentage" :color="customColorMethod"></el-progress>

        <el-progress :percentage="percentage" :color="customColors"></el-progress>
        <div>
          <el-button-group>
            <el-button icon="el-icon-minus" @click="decrease"></el-button>
            <el-button icon="el-icon-plus" @click="increase"></el-button>
          </el-button-group>
        </div>
      </div>
    </div>

    <h3 id="huan-xing-jin-du-tiao">
      <a href="#huan-xing-jin-du-tiao" aria-hidden="true" class="header-anchor">¶</a>
      环形进度条
    </h3>
    <div class="demo-block demo-zh-CN demo-progress">
      <div class="source">
        <el-progress type="circle" :percentage="0"></el-progress>
        <el-progress type="circle" :percentage="25"></el-progress>
        <el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
        <el-progress type="circle" :percentage="100" status="success"></el-progress>
        <el-progress type="circle" :percentage="50" status="exception"></el-progress>
        <el-progress type="circle" :percentage="100" status="text">Done</el-progress>
      </div>
    </div>

    <h3 id="yi-biao-pan-xing-jin-du-tiao">
      <a href="#yi-biao-pan-xing-jin-du-tiao" aria-hidden="true" class="header-anchor">¶</a>
      仪表盘形进度条
    </h3>
    <div class="demo-block demo-zh-CN demo-progress">
      <div class="source">
        <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
        <div>
          <el-button-group>
            <el-button icon="el-icon-minus" @click="decrease01"></el-button>
            <el-button icon="el-icon-plus" @click="increase01"></el-button>
          </el-button-group>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'progress',
    data() {
      return {
        // 自定义颜色
        percentage: 20,
        customColor: '#409eff',
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ],
        // 仪表盘形进度条
        percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      }
    },
    methods: {
      customColorMethod(percentage) {
        if (percentage < 30) {
          return '#909399';
        } else if (percentage < 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      },
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      },
      // 仪表盘形进度条
      increase01() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease01() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  }
</script>

<style scoped>
  .page-progress {

  }

  .page-progress .demo-block.demo-progress .el-progress--line {
    margin-bottom: 15px;
    width: 350px;
  }

  .page-progress .demo-block.demo-progress .el-progress--circle {
    margin-right: 15px;
  }
</style>
