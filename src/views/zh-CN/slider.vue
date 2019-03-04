<template>
  <section class="page-slider">
    <h2 id="slider-hua-kuai">
      <a href="#slider-hua-kuai" aria-hidden="true" class="header-anchor">¶</a>
      Slider 滑块
    </h2>
    <p>通过拖动滑块在一个固定区间内进行选择</p>
    <h2 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h2>
    <p>在拖动滑块时，显示当前值</p>
    <div class="ji-chu-hua-kuai">
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
    <h2 id="li-san-zhi">
      <a href="#li-san-zhi" aria-hidden="true" class="header-anchor">¶</a>
      离散值
    </h2>
    <p>选项可以是离散的</p>
    <div class="li-san-zhi">
      <div class="block">
        <span class="demonstration">不显示间断点</span>
        <el-slider v-model="value6" :step="10"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">显示间断点</span>
        <el-slider v-model="value7" :step="10" show-stops></el-slider>
      </div>
    </div>
    <h2 id="dai-you-shu-ru-kuang">
      <a href="#dai-you-shu-ru-kuang" aria-hidden="true" class="header-anchor">¶</a>
      带有输入框
    </h2>
    <p>通过输入框设置精确数值</p>
    <div class="dai-you-shu-ru-kuang">
      <div class="block">
    <el-slider
      v-model="value8"
      show-input>
    </el-slider>
  </div>
    </div>
    <h2 id="fan-wei-xuan-ze">
      <a href="#fan-wei-xuan-ze" aria-hidden="true" class="header-anchor">¶</a>
      范围选择
    </h2>
    <p>支持选择某一数值范围</p>
    <div class="fan-wei-xuan-ze">
      <div class="block">
        <el-slider v-model="value9" range show-stops :max="10"></el-slider>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "slider",
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
      value6: 0,
      value7: 0,
      value8: 0,
      value9: [4, 8]
    };
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
#slider-hua-kuai {
  color: #36aafc;
}
h3 {
  margin: 55px 0 20px;
}
</style>
