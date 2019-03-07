<template>
  <section class="page-switch">
    <h2 id="switch-kai-guan">
      <a href="#switch-kai-guan" aria-hidden="true" class="header-anchor">¶</a>
      Switch 开关
    </h2>
    <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
    <h3 id="ji-ben-yong-fa">
      <a href="#ji-ben-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基本用法
    </h3>
    <div class="demo-block demo-zh-CN demo-input">
      <div class="source">
        <el-switch v-model="value2"></el-switch>
      </div>
    </div>


    <h3 id="wen-zi-miao-shu">
      <a href="#wen-zi-miao-shu" aria-hidden="true" class="header-anchor">¶</a>
      文字描述
    </h3>
    <div class="demo-block demo-zh-CN demo-input">
      <div class="source">
        <el-switch
          v-model="value3"
          active-text="按月付费"
          inactive-text="按年付费">
        </el-switch>
        <el-switch
          style="display: block"
          v-model="value4"
          active-color="#13ce66"
          active-text="按月付费"
          inactive-text="按年付费">
        </el-switch>
      </div>
    </div>

    <h3 id="kuo-zhan">
      <a href="#kuo-zhan" aria-hidden="true" class="header-anchor">¶</a>
      扩展的value类型
    </h3>
    <div class="demo-block demo-zh-CN demo-input">
      <div class="source">
        <el-tooltip :content="'Switch value: ' + value5" placement="top">
          <el-switch
            v-model="value5"
            active-value="100"
            inactive-value="0">
          </el-switch>
        </el-tooltip>
      </div>
    </div>

    <h3 id="jin-yong-zhuang-tai">
      <a href="#jin-yong-zhuang-tai" aria-hidden="true" class="header-anchor">¶</a>
      禁用状态
    </h3>
    <div class="demo-block demo-zh-CN demo-input">
      <div class="source">
        <el-switch
          v-model="value6"
          disabled>
        </el-switch>
        <el-switch
          v-model="value7"
          disabled>
        </el-switch>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'switch',
    data() {
      return {
        value1: true,
        value2: true,
        value3: true,
        value4: true,
        value5: '100',
        value6: true,
        value7: false
      }
    }
  }
</script>

<style scoped>
  .page-switch {

  }

</style>
