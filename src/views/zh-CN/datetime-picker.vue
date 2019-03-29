<template>
  <section class="page-datetime-picker">
    <h2 id="datetimepicker-ri-qi-shi-jian-xuan-ze-qi">
      <a href="#datetimepicker-ri-qi-shi-jian-xuan-ze-qi" aria-hidden="true" class="header-anchor">¶</a>
      DateTimePicker 日期时间选择器
    </h2>
    <p>在同一个选择器里选择日期和时间</p>

    <h3 id="ri-qi-he-shi-jian-dian">
      <a href="#ri-qi-he-shi-jian-dian" aria-hidden="true" class="header-anchor">¶</a>
      日期和时间点
    </h3>
    <div class="demo-block demo-zh-CN demo-datetime-picker">
      <div class="source">
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
            v-model="value1"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">带快捷选项</span>
          <el-date-picker
            v-model="value2"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            :picker-options="pickerOptions1">
          </el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">设置默认时间</span>
          <el-date-picker
            v-model="value3"
            type="datetime"
            placeholder="选择日期时间"
            default-time="12:00:00">
          </el-date-picker>
        </div>
      </div>
    </div>

    <h3 id="ri-qi-he-shi-jian-fan-wei">
      <a href="#ri-qi-he-shi-jian-fan-wei" aria-hidden="true" class="header-anchor">¶</a>
      日期和时间范围
    </h3>
    <div class="demo-block demo-zh-CN demo-datetime-picker">
      <div class="source">
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
            v-model="value4"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">带快捷选项</span>
          <el-date-picker
            v-model="value5"
            type="datetimerange"
            :picker-options="pickerOptions2"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right">
          </el-date-picker>
        </div>
      </div>
    </div>

    <h3 id="mo-ren-de-qi-shi-yu-jie-shu-shi-ke">
      <a href="#mo-ren-de-qi-shi-yu-jie-shu-shi-ke" aria-hidden="true" class="header-anchor">¶</a>
      默认的起始与结束时刻
    </h3>
    <div class="demo-block demo-zh-CN demo-datetime-picker">
      <div class="source">
        <div class="block">
          <span class="demonstration">起始日期时刻为 12:00:00</span>
          <el-date-picker
            v-model="value6"
            type="datetimerange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['12:00:00']">
          </el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span>
          <el-date-picker
            v-model="value7"
            type="datetimerange"
            align="right"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['12:00:00', '08:00:00']">
          </el-date-picker>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'datetime-picker',
    data() {
      return {
        // 日期和时间点
        pickerOptions1: {
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
        value3: '',
        // 日期和时间范围
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
        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value5: ''
      }
    }
  }
</script>

<style scoped>
  .page-datetime-picker {

  }
</style>
