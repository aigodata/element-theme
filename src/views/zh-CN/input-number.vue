<template>
  <section class="page-input-number">
    <h2 id="inputnumber-ji-shu-qi">
      <a href="#inputnumber-ji-shu-qi" aria-hidden="true" class="header-anchor">¶</a>
      InputNumber 计数器
    </h2>
    <p>仅允许输入标准的数字值，可定义范围</p>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <div class="demo-block demo-zh-CN demo-input-number">
      <div class="source">
        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
      </div>
    </div>

    <h3 id="jin-yong-zhuang-tai">
      <a href="#jin-yong-zhuang-tai" aria-hidden="true" class="header-anchor">¶</a>
      禁用状态
    </h3>
    <div class="demo-block demo-zh-CN demo-input-number">
      <div class="source">
        <el-input-number v-model="num2" :disabled="true"></el-input-number>
      </div>
    </div>

    <h3 id="bu-shu">
      <a href="#bu-shu" aria-hidden="true" class="header-anchor">¶</a>
      步数
    </h3>
    <p>允许定义递增递减的步数控制</p>
    <div class="demo-block demo-zh-CN demo-input-number">
      <div class="source">
        <el-input-number v-model="num3" :step="2"></el-input-number>
      </div>
    </div>

    <h3 id="jing-du">
      <a href="#jing-du" aria-hidden="true" class="header-anchor">¶</a>
      精度
    </h3>
    <div class="demo-block demo-zh-CN demo-input-number">
      <div class="source">
        <el-input-number v-model="num9" :precision="2" :step="0.1" :max="10"></el-input-number>
      </div>
    </div>

    <h3 id="chi-cun">
      <a href="#chi-cun" aria-hidden="true" class="header-anchor">¶</a>
      尺寸
    </h3>
    <p>额外提供了 medium、small、mini 三种尺寸的数字输入框</p>
    <div class="demo-block demo-zh-CN demo-input-number">
      <div class="source">
        <el-input-number v-model="num4"></el-input-number>
        <el-input-number size="medium" v-model="num5"></el-input-number>
        <el-input-number size="small" v-model="num6"></el-input-number>
        <el-input-number size="mini" v-model="num7"></el-input-number>
      </div>
    </div>

    <h3 id="an-niu-wei-zhi">
      <a href="#an-niu-wei-zhi" aria-hidden="true" class="header-anchor">¶</a>
      按钮位置
    </h3>
    <div class="demo-block demo-zh-CN demo-input-number">
      <div class="source">
        <el-input-number v-model="num8" controls-position="right" @change="handleChange"></el-input-number>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'input-number',
    data() {
      return {
        // 基础用法
        num1: 1,
        // 禁用状态
        num2: 1,
        // 步数
        num3: 5,
        // 精度
        num9: 1,
        // 尺寸
        num4: 1,
        num5: 1,
        num6: 1,
        num7: 1,
        // 按钮位置
        num8: 1
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  }
</script>

<style scoped>
  .page-input-number {

  }

  .page-input-number .demo-block.demo-input-number .el-input-number+.el-input-number {
    margin-left: 10px;
  }
</style>
