<template>
  <section class="page-select">
    <h2 id="select-xuan-ze-qi">
      <a href="#select-xuan-ze-qi" aria-hidden="true" class="header-anchor">¶</a>
      Select 选择器
    </h2>
    <p>当选项过多时，使用下拉菜单展示并选择内容。</p>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>

    <h3 id="you-jin-yong-xuan-xiang">
      <a href="#you-jin-yong-xuan-xiang" aria-hidden="true" class="header-anchor">¶</a>
      有禁用选项
    </h3>
    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <el-select v-model="value2" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
          </el-option>
        </el-select>
      </div>
    </div>

    <h3 id="jin-yong-zhuang-tai">
      <a href="#jin-yong-zhuang-tai" aria-hidden="true" class="header-anchor">¶</a>
      禁用状态
    </h3>
    <p>选择器不可用状态</p>
    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <el-select v-model="value3" disabled placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>

    <h3 id="ke-qing-kong-dan-xuan">
      <a href="#ke-qing-kong-dan-xuan" aria-hidden="true" class="header-anchor">¶</a>
      可清空单选
    </h3>
    <p>包含清空按钮，可将选择器清空为初始状态</p>
    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <el-select v-model="value4" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>

    <h3 id="ji-chu-duo-xuan">
      <a href="#ji-chu-duo-xuan" aria-hidden="true" class="header-anchor">¶</a>
      基础多选
    </h3>
    <p>适用性较广的基础多选，用 Tag 展示已选项</p>
    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <el-select v-model="value5" multiple placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-select
          v-model="value11"
          multiple
          collapse-tags
          style="margin-left: 20px;"
          placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>

    <h3 id="zi-ding-yi-mo-ban">
      <a href="#zi-ding-yi-mo-ban" aria-hidden="true" class="header-anchor">¶</a>
      自定义模板
    </h3>
    <p>可以自定义备选项</p>
    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <el-select v-model="value6" placeholder="请选择">
          <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'select',
    data() {
      return {
        // 基础用法
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        // 有禁用选项
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value2: '',
        // 禁用状态
        value3: '',
        // 可清空单选
        value4: '',
        // 基础多选
        value5: [],
        value11: [],
        // 自定义模板
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value6: ''
      }
    }
  }
</script>

<style scoped>
  .page-select {

  }
</style>
