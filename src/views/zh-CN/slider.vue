<template>
  <section class="page-slider">
    <h2 id="select-xuan-ze-qi">
      <a href="#select-xuan-ze-qi" aria-hidden="true" class="header-anchor">¶</a>
      Slider 滑块
    </h2>
    <p>通过拖动滑块在一个固定区间内进行选择</p>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <p>通过拖动滑块在一个固定区间内进行选择</p>
    <div class="demo-block demo-zh-CN demo-slider">
      <div class="source">
        <div class="block">
          <span class="demonstration">默认</span>
          <el-slider v-model="value1"></el-slider>
        </div>
        <div class="block">
          <span class="demonstration">自定义初始值</span>
          <el-slider v-model="value2"></el-slider>
        </div>
        <div class="block">
          <span class="demonstration">隐藏 Tooltip</span>
          <el-slider v-model="value3" :show-tooltip="false"></el-slider>
        </div>
        <div class="block">
          <span class="demonstration">格式化 Tooltip</span>
          <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
        </div>
        <div class="block">
          <span class="demonstration">禁用</span>
          <el-slider v-model="value5" disabled></el-slider>
        </div>
      </div>
    </div>

    <h3 id="chi-san-zhi">
      <a href="#chi-san-zhi" aria-hidden="true" class="header-anchor">¶</a>
      离散值
    </h3>
    <p>选项可以是离散的</p>
    <div class="demo-block demo-zh-CN demo-slider">
      <div class="source">
        <div class="block">
          <span class="demonstration">不显示间断点</span>
          <el-slider
            v-model="value6"
            :step="10">
          </el-slider>
        </div>
        <div class="block">
          <span class="demonstration">显示间断点</span>
          <el-slider
            v-model="value7"
            :step="10"
            show-stops>
          </el-slider>
        </div>
      </div>
    </div>

    <h3 id="dai-you-shu-ru-kuang">
      <a href="#dai-you-shu-ru-kuang" aria-hidden="true" class="header-anchor">¶</a>
      带有输入框
    </h3>
    <p>通过输入框设置精确数值</p>
    <div class="demo-block demo-zh-CN demo-slider">
      <div class="source">
        <div class="block">
          <el-slider
            v-model="value8"
            show-input>
          </el-slider>
        </div>
      </div>
    </div>

    <h3 id="fan-wei-xuan-ze">
      <a href="#fan-wei-xuan-ze" aria-hidden="true" class="header-anchor">¶</a>
      范围选择
    </h3>
    <p>支持选择某一数值范围</p>
    <div class="demo-block demo-zh-CN demo-slider">
      <div class="source">
        <div class="block">
          <el-slider
            v-model="value9"
            range
            show-stops
            :max="10">
          </el-slider>
        </div>
      </div>
    </div>

    <h3 id="shu-xiang-mo-shi">
      <a href="#shu-xiang-mo-shi" aria-hidden="true" class="header-anchor">¶</a>
      竖向模式
    </h3>
    <div class="demo-block demo-zh-CN demo-slider">
      <div class="source">
        <div class="block">
          <el-slider
            v-model="value10"
            vertical
            height="200px">
          </el-slider>
        </div>
      </div>
    </div>

    <h3 id="zhan-shi-biao-ji">
      <a href="#zhan-shi-biao-ji" aria-hidden="true" class="header-anchor">¶</a>
      展示标记
    </h3>
    <div class="demo-block demo-zh-CN demo-slider">
      <div class="source">
        <div class="block">
          <el-slider
            v-model="value"
            range
            :marks="marks">
          </el-slider>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "slider",
  data() {
    return {
      // 基础用法
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
      // 离散值
      value6: 0,
      value7: 0,
      // 带有输入框
      value8: 0,
      // 范围选择
      value9: [4, 8],
      // 竖向模式
      value10: 0,
      // 展示标记
      value: [30, 60],
      marks: {
        0: '0°C',
        8: '8°C',
        37: '37°C',
        50: {
          style: {
            color: '#1989FA'
          },
          label: this.$createElement('strong', '50%')
        }
      }
    }
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    }
  }
};
</script>

<style scoped>
  .page-slider {

  }

  .page-slider .demo-block.demo-slider .source {
    padding: 0;
  }

  .page-slider .demo-block.demo-slider .block {
    padding: 30px 24px;
    overflow: hidden;
    border-bottom: 1px solid #eff2f6;
  }
</style>
