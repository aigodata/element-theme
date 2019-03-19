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

    <h3 id="qi-ta-ri-qi-dan-wei">
      <a href="#qi-ta-ri-qi-dan-wei" aria-hidden="true" class="header-anchor">¶</a>
      其他日期单位
    </h3>
    <p>通过扩展基础的日期选择，可以选择周、月、年或多个日期</p>
    <div class="demo-block demo-zh-CN demo-date-picker">
      <div class="source">
        <div class="container">
          <div class="block">
            <span class="demonstration">周</span>
            <el-date-picker
              v-model="value3"
              type="week"
              format="yyyy 第 WW 周"
              placeholder="选择周">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">月</span>
            <el-date-picker
              v-model="value4"
              type="month"
              placeholder="选择月">
            </el-date-picker>
          </div>
        </div>
        <div class="container">
          <div class="block">
            <span class="demonstration">年</span>
            <el-date-picker
              v-model="value5"
              type="year"
              placeholder="选择年">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">多个日期</span>
            <el-date-picker
              type="dates"
              v-model="value14"
              placeholder="选择一个或多个日期">
            </el-date-picker>
          </div>
        </div>
      </div>
    </div>

    <h3 id="xuan-ze-ri-qi-fan-wei">
      <a href="#xuan-ze-ri-qi-fan-wei" aria-hidden="true" class="header-anchor">¶</a>
      选择日期范围
    </h3>
    <p>可在一个选择器中便捷地选择一个时间范围</p>
    <div class="demo-block demo-zh-CN demo-date-picker">
      <div class="source">
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
            v-model="value6"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">带快捷选项</span>
          <el-date-picker
            v-model="value7"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions2">
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
        // 其他日期单位
        value3: '',
        value4: '',
        value5: '',
        value14: '',
        // 选择日期范围
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        value7: ''
      }
    }
  }
</script>

<style scoped>
  .page-date-picker {

  }
</style>
