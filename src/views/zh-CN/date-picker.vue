<template>
  <section class="page-date-picker">
    <h2 id="datepicker-ri-qi-xuan-ze-qi">
      <a href="#datepicker-ri-qi-xuan-ze-qi" aria-hidden="true" class="header-anchor">¶</a>
      DatePicker 日期选择器
    </h2>
    <p>用于选择或输入日期</p>

    <h3 id="xuan-ze-ri">
      <a href="#xuan-ze-ri" aria-hidden="true" class="header-anchor">¶</a>
      选择日
    </h3>
    <p>以「日」为基本单位，基础的日期选择控件</p>
    <div class="demo-block demo-zh-CN demo-date-picker">
      <div class="source">
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">带快捷选项</span>
          <el-date-picker
            v-model="value2"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions1">
          </el-date-picker>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'date-picker',
    data() {
      return {
        // 选择日
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
      }
    }
  }
</script>

<style scoped>
  .page-date-picker {

  }
</style>
