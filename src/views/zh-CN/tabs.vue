<template>
  <section class="page-tabs">
    <h2 id="tabs-biao-qian-ye">
      <a href="#tabs-biao-qian-ye" aria-hidden="true" class="header-anchor">¶</a>
      Tabs 标签页
    </h2>
    <p>分隔内容上有关联但属于不同类别的数据集合。</p>

    <h3 id="ji-ben-yong-fa">
      <a href="#ji-ben-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基本用法
    </h3>
    <p>适用性广泛的通知栏</p>
    <div class="demo-block demo-zh-CN demo-tabs">
      <div class="source">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <h3 id="xuan-xiang-qia-yang-shi">
      <a href="#xuan-xiang-qia-yang-shi" aria-hidden="true" class="header-anchor">¶</a>
      选项卡样式
    </h3>
    <p>选项卡样式的标签页。</p>
    <div class="demo-block demo-zh-CN demo-tabs">
      <div class="source">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <h3 id="qia-pian-hua">
      <a href="#qia-pian-hua" aria-hidden="true" class="header-anchor">¶</a>
      卡片化
    </h3>
    <p>卡片化的标签页。</p>
    <div class="demo-block demo-zh-CN demo-tabs">
      <div class="source">
        <el-tabs type="border-card">
          <el-tab-pane label="用户管理">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <h3 id="wei-zhi">
      <a href="#wei-zhi" aria-hidden="true" class="header-anchor">¶</a>
      位置
    </h3>
    <p>可以通过 tab-position 设置标签的位置</p>
    <div class="demo-block demo-zh-CN demo-tabs">
      <div class="source">
        <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
          <el-radio-button label="top">top</el-radio-button>
          <el-radio-button label="right">right</el-radio-button>
          <el-radio-button label="bottom">bottom</el-radio-button>
          <el-radio-button label="left">left</el-radio-button>
        </el-radio-group>

        <el-tabs :tab-position="tabPosition" style="height: 200px;">
          <el-tab-pane label="用户管理">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <h3 id="zi-ding-yi-biao-qian-ye">
      <a href="#zi-ding-yi-biao-qian-ye" aria-hidden="true" class="header-anchor">¶</a>
      自定义标签页
    </h3>
    <p>可以通过具名 slot 来实现自定义标签页的内容</p>
    <div class="demo-block demo-zh-CN demo-tabs">
      <div class="source">
        <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
            我的行程
          </el-tab-pane>
          <el-tab-pane label="消息中心">消息中心</el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <h3 id="dong-tai-zeng-jian-biao-qian-ye">
      <a href="#dong-tai-zeng-jian-biao-qian-ye" aria-hidden="true" class="header-anchor">¶</a>
      动态增减标签页
    </h3>
    <p>增减标签页按钮只能在选项卡样式的标签页下使用</p>
    <div class="demo-block demo-zh-CN demo-tabs">
      <div class="source">
        <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
          <el-tab-pane
            :key="item.name"
            v-for="(item, index) in editableTabs"
            :label="item.title"
            :name="item.name"
          >
            {{item.content}}
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <h3 id="zi-ding-yi-zeng-jia-biao-qian-ye-hong-fa-qi">
      <a href="#zi-ding-yi-zeng-jia-biao-qian-ye-hong-fa-qi" aria-hidden="true" class="header-anchor">¶</a>
      自定义增加标签页触发器
    </h3>
    <p>可以通过具名 slot 来实现自定义标签页的内容</p>
    <div class="demo-block demo-zh-CN demo-tabs">
      <div class="source">
        <div style="margin-bottom: 20px;">
          <el-button
            size="small"
            @click="addTab(editableTabsValue2)"
          >
            add tab
          </el-button>
        </div>
        <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
          <el-tab-pane
            v-for="(item, index) in editableTabs2"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
            {{item.content}}
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'tabs',
    data() {
      return {
        // 动态删减
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2,
        // 基本用法
        activeName: 'second',
        // 选项卡样式
        activeName2: 'first',
        // 位置
        tabPosition: 'top',
        // 自定义增加标签页触发器
        editableTabsValue2: '2',
        editableTabs2: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }

          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      },

      handleClick(tab, event) {
        console.log(tab, event);
      },

      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
</script>

<style scoped>
  .page-tabs {

  }
</style>
