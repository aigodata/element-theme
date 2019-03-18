<template>
  <section class="page-transfer">
    <h2 id="transfer-chuan-suo-kuang">
      <a href="#transfer-chuan-suo-kuang" aria-hidden="true" class="header-anchor">¶</a>
      Transfer 穿梭框
    </h2>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <div class="demo-block demo-zh-CN demo-color-picker">
      <div class="source">
        <el-transfer v-model="value1" :data="data"></el-transfer>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'transfer',
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        // 基础用法
        data: generateData(),
        value1: [1, 4]
      }
    }
  }
</script>

<style scoped>
  .page-transfer {

  }
</style>
