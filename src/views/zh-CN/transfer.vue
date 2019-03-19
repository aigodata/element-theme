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
    <div class="demo-block demo-zh-CN demo-transfer">
      <div class="source">
        <el-transfer v-model="value1" :data="data"></el-transfer>
      </div>
    </div>

    <h3 id="ke-sou-suo">
      <a href="#ke-sou-suo" aria-hidden="true" class="header-anchor">¶</a>
      可搜索
    </h3>
    <p>在数据很多的情况下，可以对数据进行搜索和过滤。</p>
    <div class="demo-block demo-zh-CN demo-transfer">
      <div class="source">
        <el-transfer
          filterable
          :filter-method="filterMethod"
          filter-placeholder="请输入城市拼音"
          v-model="value2"
          :data="data2">
        </el-transfer>
      </div>
    </div>

    <h3 id="ke-zi-ding-yi">
      <a href="#ke-zi-ding-yi" aria-hidden="true" class="header-anchor">¶</a>
      可自定义
    </h3>
    <p>可以对列表标题文案、按钮文案、数据项的渲染函数、列表底部的勾选状态文案、列表底部的内容区等进行自定义。</p>
    <div class="demo-block demo-zh-CN demo-transfer">
      <div class="source">
        <p style="text-align: center; margin: 0 0 20px">使用 render-content 自定义数据项</p>
        <div style="text-align: center">
          <el-transfer
            style="text-align: left; display: inline-block"
            v-model="value3"
            filterable
            :left-default-checked="[2, 3]"
            :right-default-checked="[1]"
            :render-content="renderFunc"
            :titles="['Source', 'Target']"
            :button-texts="['到左边', '到右边']"
            :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
            @change="handleChange"
            :data="data">
            <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
            <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
          </el-transfer>
        </div>
        <p style="text-align: center; margin: 50px 0 20px">使用 scoped-slot 自定义数据项</p>
        <div style="text-align: center">
          <el-transfer
            style="text-align: left; display: inline-block"
            v-model="value4"
            filterable
            :left-default-checked="[2, 3]"
            :right-default-checked="[1]"
            :titles="['Source', 'Target']"
            :button-texts="['到左边', '到右边']"
            :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
            @change="handleChange"
            :data="data">
            <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
            <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
            <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
          </el-transfer>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'transfer',
    data() {
      // 基础用法
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
      // 可搜索
      const generateData2 = _ => {
        const data = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return data;
      };
      return {
        // 基础用法
        data: generateData(),
        value1: [1, 4],
        // 可搜索
        data2: generateData2(),
        value2: [],
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        },
        // 可自定义
        data: generateData(),
        value3: [1],
        value4: [1],
        renderFunc(h, option) {
          return <span>{ option.key } - { option.label }</span>;
        }
      }
    },
    methods: {
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      }
    }
  }
</script>

<style scoped>
  .page-transfer {

  }
</style>
