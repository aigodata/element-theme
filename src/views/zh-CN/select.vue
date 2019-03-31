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
    <p>适用广泛的基础单选</p>
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
            <span style="float: right; font-size: 13px; margin-right: 20px">{{ item.value }}</span>
          </el-option>
        </el-select>
      </div>
    </div>

    <h3 id="fen-zu">
      <a href="#fen-zu" aria-hidden="true" class="header-anchor">¶</a>
      分组
    </h3>
    <p>备选项进行分组展示</p>
    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <el-select v-model="value7" placeholder="请选择">
          <el-option-group
            v-for="group in options3"
            :key="group.label"
            :label="group.label">
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-option-group>
        </el-select>
      </div>
    </div>

    <h3 id="ke-sou-suo">
      <a href="#ke-sou-suo" aria-hidden="true" class="header-anchor">¶</a>
      可搜索
    </h3>
    <p>可以利用搜索功能快速查找选项</p>
    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <el-select v-model="value8" filterable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>

    <h3 id="yuan-cheng-sou-suo">
      <a href="#yuan-cheng-sou-suo" aria-hidden="true" class="header-anchor">¶</a>
      远程搜索
    </h3>
    <p>从服务器搜索数据，输入关键字进行查找</p>
    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <el-select
          v-model="value9"
          multiple
          filterable
          remote
          reserve-keyword
          placeholder="请输入关键词"
          :remote-method="remoteMethod"
          :loading="loading">
          <el-option
            v-for="item in options4"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>

    <h3 id="chuang-jian-tiao-mu">
      <a href="#chuang-jian-tiao-mu" aria-hidden="true" class="header-anchor">¶</a>
      创建条目
    </h3>
    <p>可以创建并选中选项中不存在的条目</p>
    <div class="demo-block demo-zh-CN demo-select">
      <div class="source">
        <el-select
          v-model="value10"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择文章标签">
          <el-option
            v-for="item in options5"
            :key="item.value"
            :label="item.label"
            :value="item.value">
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
        value6: '',
        // 分组
        options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        value7: '',
        // 可搜索
        value8: '',
        // 远程搜索
        options4: [],
        value9: [],
        list: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona",
          "Arkansas", "California", "Colorado",
          "Connecticut", "Delaware", "Florida",
          "Georgia", "Hawaii", "Idaho", "Illinois",
          "Indiana", "Iowa", "Kansas", "Kentucky",
          "Louisiana", "Maine", "Maryland",
          "Massachusetts", "Michigan", "Minnesota",
          "Mississippi", "Missouri", "Montana",
          "Nebraska", "Nevada", "New Hampshire",
          "New Jersey", "New Mexico", "New York",
          "North Carolina", "North Dakota", "Ohio",
          "Oklahoma", "Oregon", "Pennsylvania",
          "Rhode Island", "South Carolina",
          "South Dakota", "Tennessee", "Texas",
          "Utah", "Vermont", "Virginia",
          "Washington", "West Virginia", "Wisconsin",
          "Wyoming"],
        // 创建条目
        options5: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        value10: []
      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return { value: item, label: item };
      });
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options4 = [];
        }
      }
    }
  }
</script>

<style scoped>
  .page-select {

  }
</style>
