<template>
  <section class="page-calendar content element-doc content">
    <h2 id="border-bian-kuang">
      <a href="#button-an-niu" aria-hidden="true" class="header-anchor">¶</a>
      Calendar calendar
    </h2>

    <p>显示日期</p>

    <h3 id="ji-ben">
      <a href="#ji-ben" aria-hidden="true" class="header-anchor">¶</a>
      基本
    </h3>
    <div class="demo-block demo-zh-CN demo-calendar">
      <div class="source">
        <div>
          <el-calendar v-model="value"></el-calendar>
        </div>
      </div>
    </div>

    <h3 id="zi-ding-yi-nei-rong">
      <a href="#zi-ding-yi-nei-rong" aria-hidden="true" class="header-anchor">¶</a>
      自定义内容
    </h3>
    <div class="demo-block demo-zh-CN demo-calendar">
      <div class="source">
        <div>
          <el-calendar>
            <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
            <template
              slot="dateCell"
              slot-scope="{date, data}">
              <p :class="data.isSelected ? 'is-selected' : ''">
                {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
              </p>
            </template>
          </el-calendar>
        </div>
      </div>
    </div>

    <h3 id="zi-ding-yi-fan-wei">
      <a href="#zi-ding-yi-fan-wei" aria-hidden="true" class="header-anchor">¶</a>
      自定义范围
    </h3>
    <div class="demo-block demo-zh-CN demo-calendar">
      <div class="source">
        <div>
          <el-calendar :range="['2019-03-04', '2019-03-24']"></el-calendar>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
	export default {
		name: "calendar",
    data() {
      return {
        value: new Date()
      }
    }
	}
</script>

<style scoped>
  .page-calendar {

  }

  .page-calendar .is-selected {
    color: #fff;
  }
</style>
