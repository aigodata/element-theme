<template>
  <section class="page-card">
    <h2 id="card-qia-pian">
      <a href="#card-qia-pian" aria-hidden="true" class="header-anchor">¶</a>
      Card 卡片
    </h2>
    <p>将信息聚合在卡片容器中展示。</p>

    <h3 id="ji-ben-yong-fa">
      <a href="#ji-ben-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基本用法
    </h3>
    <p>包含标题，内容和操作。</p>
    <div class="demo-block demo-zh-CN demo-card">
      <div class="source">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
    </div>

    <h3 id="jian-dan-qia-pian">
      <a href="#jian-dan-qia-pian" aria-hidden="true" class="header-anchor">¶</a>
      简单卡片
    </h3>
    <p>卡片可以只有内容区域。</p>
    <div class="demo-block demo-zh-CN demo-card">
      <div class="source">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
    </div>

    <h3 id="dai-tu-pian">
      <a href="#dai-tu-pian" aria-hidden="true" class="header-anchor">¶</a>
      带图片
    </h3>
    <p>可配置定义更丰富的内容展示。</p>
    <div class="demo-block demo-zh-CN demo-card">
      <div class="source">
        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../assets/hamburger.png" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>

    <h3 id="qia-pian-yin-ying">
      <a href="#qia-pian-yin-ying" aria-hidden="true" class="header-anchor">¶</a>
      卡片阴影
    </h3>
    <p>可对阴影的显示进行配置。</p>
    <div class="demo-block demo-zh-CN demo-card">
      <div class="source">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="always">
              总是显示
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              鼠标悬浮时显示
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="never">
              从不显示
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'card',
    data() {
      return {
        currentDate: new Date()
      }
    }
  }
</script>

<style scoped>
  .page-card {

  }

  .page-card .text {
    font-size: 14px;
  }

  .page-card .item {
    margin-bottom: 18px;
  }

  .page-card .clearfix:before,
  .page-card .clearfix:after {
    display: table;
    content: "";
  }
  .page-card .clearfix:after {
    clear: both
  }

  .page-card .box-card {
    width: 480px;
  }

  .page-card .demo-block.demo-card .time {
    font-size: 13px;
    color: #999;
  }
</style>
