<template>
  <section class="page-timeline">
    <h2 id="timeline-shi-jian-xian">
      <a href="#timeline-shi-jian-xian" aria-hidden="true" class="header-anchor">¶</a>
      Timeline 时间线
    </h2>
    <p>可视化地呈现时间流信息。</p>

    <h3 id="ji-ben-yong-fa">
      <a href="#ji-ben-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基本用法
    </h3>
    <p>Timeline 可拆分成多个按照时间戳正序或倒序排列的 activity，时间戳是其区分于其他控件的重要特征，使⽤时注意与 Steps 步骤条等区分。</p>
    <div class="demo-block demo-zh-CN demo-timeline">
      <div class="source">
        <div class="block">
          <div class="radio">
            排序：
            <el-radio-group v-model="reverse">
              <el-radio :label="true">倒序</el-radio>
              <el-radio :label="false">正序</el-radio>
            </el-radio-group>
          </div>

          <el-timeline :reverse="reverse">
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.timestamp">
              {{activity.content}}
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>

    <h3 id="ding-yi-jie-dian-yang-shi">
      <a href="#ding-yi-jie-dian-yang-shi" aria-hidden="true" class="header-anchor">¶</a>
      ⾃定义节点样式
    </h3>
    <p>可根据实际场景⾃定义节点尺⼨、颜⾊，或直接使⽤图标。</p>
    <div class="demo-block demo-zh-CN demo-timeline">
      <div class="source">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities2"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :borderColor="activity.borderColor"
            :size="activity.size"
            :timestamp="activity.timestamp">
            {{activity.content}}
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>

    <h3 id="ding-yi-shi-jian-chuo">
      <a href="#ding-yi-shi-jian-chuo" aria-hidden="true" class="header-anchor">¶</a>
      ⾃定义时间戳
    </h3>
    <p>当内容在垂直⽅向上过⾼时，可将时间戳置于内容之上。</p>
    <div class="demo-block demo-zh-CN demo-timeline">
      <div class="source">
        <div class="block">
          <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/3 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'timeline',
    data() {
      return {
        // 基本用法
        reverse: true,
        activities: [{
          content: '活动按期开始',
          timestamp: '2018-04-15'
        }, {
          content: '通过审核',
          timestamp: '2018-04-13'
        }, {
          content: '创建成功',
          timestamp: '2018-04-11'
        }],
        // 自定义节点样式
        activities2: [{
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87',
          borderColor: '#0bbd87'
        }, {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46'
        }],
        // ⾃定义时间戳
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .page-timeline {

  }

  .page-timeline .demo-timeline .source .radio {
    margin-bottom: 20px;
  }
</style>
