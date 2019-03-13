<template>
  <section class="page-time-picker">
    <h2 id="timepicker-shi-jian-xuan-ze-qi">
      <a href="#timepicker-shi-jian-xuan-ze-qi" aria-hidden="true" class="header-anchor">¶</a>
      TimePicker 时间选择器
    </h2>
    <p>用于选择或输入日期</p>

    <h3 id="gu-ding-shi-jian-dian">
      <a href="#gu-ding-shi-jian-dian" aria-hidden="true" class="header-anchor">¶</a>
      固定时间点
    </h3>
    <p>提供几个固定的时间点供用户选择</p>
    <div class="demo-block demo-zh-CN demo-time-picker">
      <div class="source">
        <el-time-select
          v-model="value1"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
          }"
          placeholder="选择时间">
        </el-time-select>
      </div>
    </div>

    <h3 id="ren-yi-shi-jian-dian">
      <a href="#ren-yi-shi-jian-dian" aria-hidden="true" class="header-anchor">¶</a>
      任意时间点
    </h3>
    <p>可以选择任意时间</p>
    <div class="demo-block demo-zh-CN demo-time-picker">
      <div class="source">
        <el-time-picker
          v-model="value2"
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }"
          placeholder="任意时间点">
        </el-time-picker>
        <el-time-picker
          arrow-control
          v-model="value3"
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }"
          placeholder="任意时间点">
        </el-time-picker>
      </div>
    </div>

    <h3 id="gu-ding-shi-jian-fan-wei">
      <a href="#gu-ding-shi-jian-fan-wei" aria-hidden="true" class="header-anchor">¶</a>
      固定时间范围
    </h3>
    <p>若先选择开始时间，则结束时间内备选项的状态会随之改变</p>
    <div class="demo-block demo-zh-CN demo-time-picker">
      <div class="source">
        <el-time-select
          placeholder="起始时间"
          v-model="startTime"
          :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30'
        }">
        </el-time-select>
        <el-time-select
          placeholder="结束时间"
          v-model="endTime"
          :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30',
          minTime: startTime
        }">
        </el-time-select>
      </div>
    </div>

    <h3 id="ren-yi-shi-jian-fan-wei">
      <a href="#ren-yi-shi-jian-fan-wei" aria-hidden="true" class="header-anchor">¶</a>
      任意时间范围
    </h3>
    <p>可选择任意的时间范围</p>
    <div class="demo-block demo-zh-CN demo-time-picker">
      <div class="source">
        <el-time-picker
          is-range
          v-model="value4"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围">
        </el-time-picker>
        <el-time-picker
          is-range
          arrow-control
          v-model="value5"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围">
        </el-time-picker>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'time-picker',
    data() {
      return {
        // 固定时间点
        value1: '',
        // 任意时间点
        value2: new Date(2016, 9, 10, 18, 40),
        value3: new Date(2016, 9, 10, 18, 40),
        // 固定时间范围
        startTime: '',
        endTime: '',
        // 任意时间范围
        value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      }
    }
  }
</script>

<style scoped>
  .page-time-picker {

  }

  .page-time-picker .demo-block .el-date-editor+.el-date-editor {
    margin-left: 10px;
  }
</style>
