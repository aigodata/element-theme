<template>
  <section class="page-rate">
    <h2 id="rate-ping-fen">
      <a href="#rate-ping-fen" aria-hidden="true" class="header-anchor">¶</a>
      Rate 评分
    </h2>
    <p>评分组件</p>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <div class="demo-block demo-zh-CN demo-rate">
      <div class="source">
        <div class="block">
          <span class="demonstration">默认不区分颜色</span>
          <el-rate v-model="value1"></el-rate>
        </div>
        <div class="block">
          <span class="demonstration">区分颜色</span>
          <el-rate
            v-model="value2"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
          </el-rate>
        </div>
      </div>
    </div>

    <h3 id="fu-zhu-wen-zi">
      <a href="#fu-zhu-wen-zi" aria-hidden="true" class="header-anchor">¶</a>
      辅助文字
    </h3>
    <p>用辅助文字直接地表达对应分数</p>
    <div class="demo-block demo-zh-CN demo-rate">
      <div class="source">
        <el-rate
          v-model="value3"
          show-text>
        </el-rate>
      </div>
    </div>

    <h3 id="qi-ta-icon">
      <a href="#qi-ta-icon" aria-hidden="true" class="header-anchor">¶</a>
      其它 icon
    </h3>
    <p>当有多层评价时，可以用不同类型的 icon 区分评分层级</p>
    <div class="demo-block demo-zh-CN demo-rate">
      <div class="source">
        <el-rate
          v-model="value4"
          :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
          void-icon-class="icon-rate-face-off"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
      </div>
    </div>

    <h3 id="zhi-du">
      <a href="#zhi-du" aria-hidden="true" class="header-anchor">¶</a>
      只读
    </h3>
    <p>只读的评分用来展示分数，允许出现半星</p>
    <div class="demo-block demo-zh-CN demo-rate">
      <div class="source">
        <el-rate
          v-model="value5"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'rate',
    data() {
      return {
        // 基础用法
        value1: null,
        value2: null,
        // 辅助文字
        value3: null,
        // 其它 icon
        value4: null,
        // 只读
        value5: 3.7
      }
    }
  }
</script>

<style scoped>
  .page-rate {

  }
</style>
