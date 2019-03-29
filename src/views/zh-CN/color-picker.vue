<template>
  <section class="page-color-picker">
    <h2 id="colorpicker-yan-se-xuan-ze-qi">
      <a href="#colorpicker-yan-se-xuan-ze-qi" aria-hidden="true" class="header-anchor">¶</a>
      ColorPicker 颜色选择器
    </h2>
    <p>用于颜色选择，支持多种格式。</p>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <div class="demo-block demo-zh-CN demo-color-picker">
      <div class="source">
        <div class="block">
          <span class="demonstration">有默认值</span>
          <el-color-picker v-model="color1"></el-color-picker>
        </div>
        <div class="block">
          <span class="demonstration">无默认值</span>
          <el-color-picker v-model="color2"></el-color-picker>
        </div>
      </div>
    </div>

    <h3 id="xuan-ze-tou-ming-du">
      <a href="#xuan-ze-tou-ming-du" aria-hidden="true" class="header-anchor">¶</a>
      选择透明度
    </h3>
    <div class="demo-block demo-zh-CN demo-color-picker">
      <div class="source">
        <el-color-picker v-model="color3" show-alpha></el-color-picker>
      </div>
    </div>

    <h3 id="yu-ding-yi-yan-se">
      <a href="#yu-ding-yi-yan-se" aria-hidden="true" class="header-anchor">¶</a>
      预定义颜色
    </h3>
    <div class="demo-block demo-zh-CN demo-color-picker">
      <div class="source">
        <el-color-picker
          v-model="color5"
          show-alpha
          :predefine="predefineColors">
        </el-color-picker>
      </div>
    </div>

    <h3 id="bu-tong-chi-cun">
      <a href="#bu-tong-chi-cun" aria-hidden="true" class="header-anchor">¶</a>
      不同尺寸
    </h3>
    <div class="demo-block demo-zh-CN demo-color-picker">
      <div class="source">
        <el-color-picker v-model="color4"></el-color-picker>
        <el-color-picker v-model="color4" size="medium"></el-color-picker>
        <el-color-picker v-model="color4" size="small"></el-color-picker>
        <el-color-picker v-model="color4" size="mini"></el-color-picker>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'color-picker',
    data() {
      return {
        // 基础用法
        color1: '#409EFF',
        color2: null,
        // 选择透明度
        color3: 'rgba(19, 206, 102, 0.8)',
        // 预定义颜色
        color5: 'rgba(255, 69, 0, 0.68)',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ],
        // 不同尺寸
        color4: '#409EFF'
      }
    }
  }
</script>

<style scoped>
  .page-color-picker {

  }
</style>
