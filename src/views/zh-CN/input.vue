<template>
  <section class="page-input">
    <h2 id="input-shu-ru-kuang">
      <a href="#input-shu-ru-kuang" aria-hidden="true" class="header-anchor">¶</a>
      Input 输入框
    </h2>
    <p>通过鼠标或键盘输入字符</p>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <div class="demo-block demo-zh-CN demo-input">
      <div class="source">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
    </div>

    <h3 id="jin-yong-zhuang-tai">
      <a href="#jin-yong-zhuang-tai" aria-hidden="true" class="header-anchor">¶</a>
      禁用状态
    </h3>
    <div class="demo-block demo-zh-CN demo-input">
      <div class="source">
        <el-input
          placeholder="请输入内容"
          v-model="input1"
          :disabled="true">
        </el-input>
      </div>
    </div>

    <h3 id="ke-qing-kong">
      <a href="#ke-qing-kong" aria-hidden="true" class="header-anchor">¶</a>
      可清空
    </h3>
    <div class="demo-block demo-zh-CN demo-input">
      <div class="source">
        <el-input
          placeholder="请输入内容"
          v-model="input10"
          clearable>
        </el-input>
      </div>
    </div>

    <h3 id="mi-ma-kuang">
      <a href="#mi-ma-kuang" aria-hidden="true" class="header-anchor">¶</a>
      密码框
    </h3>
    <div class="demo-block demo-zh-CN demo-input">
      <div class="source">
        <el-input placeholder="请输入密码" v-model="input11" show-password></el-input>
      </div>
    </div>

    <h3 id="dai-icon-de-shu-ru-kuang">
      <a href="#dai-icon-de-shu-ru-kuang" aria-hidden="true" class="header-anchor">¶</a>
      带 icon 的输入框
    </h3>
    <div class="demo-block demo-zh-CN demo-input">
      <div class="source">
        <div class="demo-input-suffix">
          属性方式：
          <el-input
            placeholder="请选择日期"
            suffix-icon="el-icon-date"
            v-model="input2">
          </el-input>
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input21">
          </el-input>
        </div>
        <div class="demo-input-suffix">
          slot 方式：
          <el-input
            placeholder="请选择日期"
            v-model="input22">
            <i slot="suffix" class="el-input__icon el-icon-date"></i>
          </el-input>
          <el-input
            placeholder="请输入内容"
            v-model="input23">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </div>
    </div>

    <h3 id="wen-ben-yu">
      <a href="#wen-ben-yu" aria-hidden="true" class="header-anchor">¶</a>
      文本域
    </h3>
    <div class="demo-block demo-zh-CN demo-input">
      <div class="source">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
      </div>
    </div>

    <h3 id="ke-zi-gua-ying-wen-ben-gao-du-de-wen-ben-yu">
      <a href="#ke-zi-gua-ying-wen-ben-gao-du-de-wen-ben-yu" aria-hidden="true" class="header-anchor">¶</a>
      可自适应文本高度的文本域
    </h3>
    <p>通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。</p>
    <div class="demo-block demo-zh-CN demo-input">
      <div class="source">
        <el-input
          type="textarea"
          autosize
          placeholder="请输入内容"
          v-model="textarea2">
        </el-input>
        <div style="margin: 20px 0;"></div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="textarea3">
        </el-input>
      </div>
    </div>

    <h3 id="fu-he-xing-shu-ru-kuang">
      <a href="#fu-he-xing-shu-ru-kuang" aria-hidden="true" class="header-anchor">¶</a>
      复合型输入框
    </h3>
    <p>可前置或后置元素，一般为标签或按钮</p>
    <div class="demo-block demo-zh-CN demo-input">
      <div class="source">
        <div>
          <el-input placeholder="请输入内容" v-model="input3">
            <template slot="prepend">Http://</template>
          </el-input>
        </div>
        <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容" v-model="input4">
            <template slot="append">.com</template>
          </el-input>
        </div>
        <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
    </div>

    <h3 id="chi-cun">
      <a href="#chi-cun" aria-hidden="true" class="header-anchor">¶</a>
      尺寸
    </h3>
    <div class="demo-block demo-zh-CN demo-input">
      <div class="source">
        <div class="demo-input-size">
          <el-input
            placeholder="请输入内容"
            suffix-icon="el-icon-date"
            v-model="input6">
          </el-input>
          <el-input
            size="medium"
            placeholder="请输入内容"
            suffix-icon="el-icon-date"
            v-model="input7">
          </el-input>
          <el-input
            size="small"
            placeholder="请输入内容"
            suffix-icon="el-icon-date"
            v-model="input8">
          </el-input>
          <el-input
            size="mini"
            placeholder="请输入内容"
            suffix-icon="el-icon-date"
            v-model="input9">
          </el-input>
        </div>
      </div>
    </div>

    <h3 id="dai-shu-ru-jian-yi">
      <a href="#dai-shu-ru-jian-yi" aria-hidden="true" class="header-anchor">¶</a>
      带输入建议
    </h3>
    <p>根据输入内容提供对应的输入建议</p>
    <div class="demo-block demo-zh-CN demo-input">
      <div class="source">
        <el-row class="demo-autocomplete">
          <el-col :span="12">
            <div class="sub-title">激活即列出输入建议</div>
            <el-autocomplete
              class="inline-input"
              v-model="state1"
              :fetch-suggestions="querySearch"
              placeholder="请输入内容"
              @select="handleSelect"
            ></el-autocomplete>
          </el-col>
          <el-col :span="12">
            <div class="sub-title">输入后匹配输入建议</div>
            <el-autocomplete
              class="inline-input"
              v-model="state2"
              :fetch-suggestions="querySearch"
              placeholder="请输入内容"
              :trigger-on-focus="false"
              @select="handleSelect"
            ></el-autocomplete>
          </el-col>
        </el-row>
      </div>
    </div>

    <h3 id="zi-ding-yi-mo-ban">
      <a href="#zi-ding-yi-mo-ban" aria-hidden="true" class="header-anchor">¶</a>
      自定义模板
    </h3>
    <p>可自定义输入建议的显示</p>
    <div class="demo-block demo-zh-CN demo-input">
      <div class="source">
        <el-autocomplete
          popper-class="my-autocomplete"
          v-model="state3"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          @select="handleSelect">
          <i
            class="el-icon-edit el-input__icon"
            slot="suffix"
            @click="handleIconClick">
          </i>
          <template slot-scope="{ item }">
            <div class="name">{{ item.value }}</div>
            <span class="addr">{{ item.address }}</span>
          </template>
        </el-autocomplete>
      </div>
    </div>

    <h3 id="yuan-cheng-sou-suo">
      <a href="#yuan-cheng-sou-suo" aria-hidden="true" class="header-anchor">¶</a>
      远程搜索
    </h3>
    <p>从服务端搜索数据</p>
    <div class="demo-block demo-zh-CN demo-input">
      <div class="source">
        <el-autocomplete
          v-model="state4"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入内容"
          @select="handleSelect"
        ></el-autocomplete>
      </div>
    </div>

    <h3 id="shu-ru-chang-du-xian-zhi">
      <a href="#shu-ru-chang-du-xian-zhi" aria-hidden="true" class="header-anchor">¶</a>
      输入长度限制
    </h3>
    <div class="demo-block demo-zh-CN demo-input">
      <div class="source">
        <el-input
          type="text"
          placeholder="请输入内容"
          v-model="text"
          maxlength="10"
          show-word-limit
        >
        </el-input>
        <div style="margin: 20px 0;"></div>
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="textarea"
          maxlength="30"
          show-word-limit
        >
        </el-input>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'input',
    data() {
      return {
        // 基础用法
        input: '',
        // 禁用状态
        input1: '',
        // 可清空
        input10: '',
        // 密码框
        input11: '',
        // 带 icon 的输入框
        input2: '',
        input21: '',
        input22: '',
        input23: '',
        // 文本域
        text: '',
        textarea: '',
        // 可自适应文本高度的文本域
        textarea2: '',
        textarea3: '',
        // 复合型输入框
        input3: '',
        input4: '',
        input5: '',
        select: '',
        // 尺寸
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        // 带输入建议
        state1: '',
        state2: '',
        // 自定义模板
        state3: '',
        // 远程搜索
        restaurants: [],
        state4: '',
        timeout: null
      }
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          {"value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号"},
          {"value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号"},
          {"value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"}
        ]
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>

<style>
  .page-input {

  }

  .page-input .el-select .el-input {
    width: 130px;
  }

  .page-input .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  .page-input .my-autocomplete li {
    line-height: normal;
    padding: 7px;
  }

  .page-input .my-autocomplete li .name {
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .page-input .my-autocomplete li .addr {
    font-size: 12px;
    color: #b4b4b4;
  }

  .page-input .my-autocomplete li .highlighted .addr {
    color: #ddd;
  }
</style>
