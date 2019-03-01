<template>
  <section class="page-radio">
    <h2 id="radio-dan-xuan-kuang">
      <a href="#radio-dan-xuan-kuang" aria-hidden="true" class="header-anchor">¶</a>
      Radio 单选框
    </h2>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
    <div class="demo-block demo-box demo-zh-CN demo-button">
      <div class="source">
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
      </div>
    </div>

    <h3 id="jin-yong-zhuang-tai">
      <a href="#jin-yong-zhuang-tai" aria-hidden="true" class="header-anchor">¶</a>
      禁用状态
    </h3>
    <p>单选框不可用的状态。</p>
    <div class="demo-block demo-box demo-zh-CN demo-button">
      <div class="source">
        <el-radio disabled v-model="radioDisabled" label="禁用">备选项</el-radio>
        <el-radio disabled v-model="radioDisabled" label="选中且禁用">备选项</el-radio>
      </div>
    </div>

    <h3 id="dan-xuan-kuang-zu">
      <a href="#dan-xuan-kuang-zu" aria-hidden="true" class="header-anchor">¶</a>
      单选框组
    </h3>
    <p>适用于在多个互斥的选项中选择的场景。</p>
    <div class="demo-block demo-box demo-zh-CN demo-button">
      <div class="source">
        <el-radio-group v-model="radio2">
          <el-radio :label="3">备选项</el-radio>
          <el-radio :label="6">备选项</el-radio>
          <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
      </div>
    </div>

    <h3 id="an-niu-yang-shi">
      <a href="#an-niu-yang-shi" aria-hidden="true" class="header-anchor">¶</a>
      按钮样式
    </h3>
    <p>按钮样式的单选组合。</p>
    <div class="demo-block demo-box demo-zh-CN demo-button">
      <div class="source">
        <div>
          <el-radio-group v-model="radio3">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio4" size="medium">
            <el-radio-button label="上海" ></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>

        <div style="margin-top: 20px">
          <el-radio-group v-model="radio5" size="small">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京" disabled ></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio6" disabled size="mini">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
      </div>
    </div>

    <h3 id="dai-you-bian-kuang">
      <a href="#dai-you-bian-kuang" aria-hidden="true" class="header-anchor">¶</a>
      带有边框
    </h3>
    <div class="demo-block demo-box demo-zh-CN demo-button">
      <div class="source">
        <div>
          <el-radio v-model="radio7" label="1" border>备选项1</el-radio>
          <el-radio v-model="radio7" label="2" border>备选项2</el-radio>
        </div>
        <div style="margin-top: 20px">
          <el-radio v-model="radio8" label="1" border size="medium">备选项1</el-radio>
          <el-radio v-model="radio8" label="2" border size="medium">备选项2</el-radio>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio9" size="small">
            <el-radio label="1" border>备选项1</el-radio>
            <el-radio label="2" border disabled>备选项2</el-radio>
          </el-radio-group>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio10" size="mini" disabled>
            <el-radio label="1" border>备选项1</el-radio>
            <el-radio label="2" border>备选项2</el-radio>
          </el-radio-group>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'radio',
    data() {
      return {
        // 基础用法
        radio: '1',
        // 禁用状态
        radioDisabled: '选中且禁用',
        // 单选框组
        radio2: 3,
        // 按钮样式
        radio3: '上海',
        radio4: '上海',
        radio5: '上海',
        radio6: '上海',
        // 带有边框
        radio7: '1',
        radio8: '1',
        radio9: '1',
        radio10: '1'
      }
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style scoped>
  .page-radio {

  }
</style>
