<template>
  <section class="page-badge">
    <h2 id="badge-biao-ji">
      <a href="#badge-biao-ji" aria-hidden="true" class="header-anchor">¶</a>
      Badge 标记
    </h2>
    <p>出现在按钮、图标旁的数字或状态标记。</p>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <p>展示新消息数量。</p>
    <div class="demo-block demo-zh-CN demo-badge">
      <div class="source">
        <el-badge :value="12" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="3" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
        <el-badge :value="1" class="item" type="primary">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="2" class="item" type="warning">
          <el-button size="small">回复</el-button>
        </el-badge>
        <el-badge :value="1" class="item" type="success">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="2" class="item" type="info">
          <el-button size="small">回复</el-button>
        </el-badge>
        <el-badge :value="2" class="item" type="danger">
          <el-button size="small">回复</el-button>
        </el-badge>

        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="clearfix">
              评论
              <el-badge class="mark" :value="12" />
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
              回复
              <el-badge class="mark" :value="3" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <h3 id="zui-da-zhi">
      <a href="#zui-da-zhi" aria-hidden="true" class="header-anchor">¶</a>
      最大值
    </h3>
    <p>可自定义最大值。</p>
    <div class="demo-block demo-zh-CN demo-badge">
      <div class="source">
        <el-badge :value="200" :max="99" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="100" :max="10" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
      </div>
    </div>

    <h3 id="zi-ding-yi-nei-rong">
      <a href="#zi-ding-yi-nei-rong" aria-hidden="true" class="header-anchor">¶</a>
      自定义内容
    </h3>
    <p>可以显示数字以外的文本内容。</p>
    <div class="demo-block demo-zh-CN demo-badge">
      <div class="source">
        <el-badge value="new" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge value="hot" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
      </div>
    </div>

    <h3 id="xiao-hong-dian">
      <a href="#xiao-hong-dian" aria-hidden="true" class="header-anchor">¶</a>
      小红点
    </h3>
    <p>以红点的形式标注需要关注的内容。</p>
    <div class="demo-block demo-zh-CN demo-badge">
      <div class="source">
        <el-badge is-dot class="item">数据查询</el-badge>
        <el-badge is-dot class="item">
          <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
        </el-badge>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'badge'
  }
</script>

<style scoped>
  .page-badge {

  }

  .page-badge .item {
    margin-top: 10px;
    margin-right: 40px
  }

  .page-badge .demo-badge.demo-block .share-button {
    width: 36px;
    padding: 10px
  }
</style>
