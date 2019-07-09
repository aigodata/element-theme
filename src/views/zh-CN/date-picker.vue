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
        <div style="width: 100%;">
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
        <div style="width: 100%;">
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
    </div>

    <h3 id="xuan-ze-yue-fen-fan-wei">
      <a href="#xuan-ze-yue-fen-fan-wei" aria-hidden="true" class="header-anchor">¶</a>
      选择月份范围
    </h3>
    <p>可在一个选择器中便捷地选择一个月份范围</p>
    <div class="demo-block demo-zh-CN demo-date-picker">
      <div class="source">
        <div style="width: 100%;">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
              v-model="value15"
              type="monthrange"
              range-separator="至"
              start-placeholder="开始月份"
              end-placeholder="结束月份">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker
              v-model="value16"
              type="monthrange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始月份"
              end-placeholder="结束月份"
              :picker-options="pickerOptions3">
            </el-date-picker>
          </div>
        </div>
      </div>
    </div>

    <h3 id="ri-qi-ge-shi">
      <a href="#ri-qi-ge-shi" aria-hidden="true" class="header-anchor">¶</a>
      日期格式
    </h3>
    <p>
      使用format指定输入框的格式；使用value-format指定绑定值的格式。
      默认情况下，组件接受并返回Date对象。以下为可用的格式化字串，以 UTC 2017年1月2日 03:04:05 为例：
    </p>
    <div class="demo-block demo-zh-CN demo-date-picker">
      <div class="source">
        <div style="width: 100%;">
          <div class="block">
            <span class="demonstration">默认为 Date 对象</span>
            <div class="demonstration">值：{{ value10 }}</div>
            <el-date-picker
              v-model="value10"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">使用 value-format</span>
            <div class="demonstration">值：{{ value11 }}</div>
            <el-date-picker
              v-model="value11"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">时间戳</span>
            <div class="demonstration">值：{{ value12 }}</div>
            <el-date-picker
              v-model="value12"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="timestamp">
            </el-date-picker>
          </div>
        </div>
      </div>
    </div>

    <h3 id="mo-ren-xian-shi-ri-qi">
      <a href="#mo-ren-xian-shi-ri-qi" aria-hidden="true" class="header-anchor">¶</a>
      默认显示日期
    </h3>
    <p>在选择日期范围时，指定起始日期和结束日期的默认时刻。</p>
    <div class="demo-block demo-zh-CN demo-date-picker">
      <div class="source">
        <div style="width: 100%;">
          <div class="block">
            <p>组件值：{{ value13 }}</p>
            <el-date-picker
              v-model="value13"
              type="daterange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['00:00:00', '23:59:59']">
            </el-date-picker>
          </div>
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
        value7: '',
        // 选择月份范围
        pickerOptions3: {
          shortcuts: [{
            text: '本月',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            }
          }, {
            text: '今年至今',
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近六个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value15: '',
        value16: '',
        // 日期格式
        value10: '',
        value11: '',
        value12: '',
        // 默认显示日期
        value13: ''
      }
    }
  }
</script>

<style scoped>
  .page-date-picker {

  }
</style>
