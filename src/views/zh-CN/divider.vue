<template>
  <section class="page-divider">
    <h2 id="divider-fen-ge-xian">
      <a href="#divider-fen-ge-xian" aria-hidden="true" class="header-anchor">¶</a>
      Divider 分割线
    </h2>
    <p>区隔内容的分割线。</p>

    <h3 id="ji-ben-yong-fa">
      <a href="#ji-ben-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基本用法
    </h3>
    <p>对不同章节的文本段落进行分割。</p>
    <div class="demo-block demo-zh-CN demo-divider">
      <div class="source">
        <div>
          <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
          <el-divider></el-divider>
          <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
        </div>
      </div>
    </div>

    <h3 id="she-zhi-wen-an">
      <a href="#she-zhi-wen-an" aria-hidden="true" class="header-anchor">¶</a>
      设置文案
    </h3>
    <p>可以在分割线上自定义文案内容。</p>
    <div class="demo-block demo-zh-CN demo-divider">
      <div class="source">
        <div>
          <span>头上一片晴天，心中一个想念</span>
          <el-divider content-position="left">少年包青天</el-divider>
          <span>饿了别叫妈, 叫饿了么</span>
          <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
          <span>为了无法计算的价值</span>
          <el-divider content-position="right">阿里云</el-divider>
        </div>
      </div>
    </div>

    <h3 id="chui-zhi-fen-ge">
      <a href="#chui-zhi-fen-ge" aria-hidden="true" class="header-anchor">¶</a>
      垂直分割
    </h3>
    <div class="demo-block demo-zh-CN demo-divider">
      <div class="source">
        <div>
          <span>雨纷纷</span>
          <el-divider direction="vertical"></el-divider>
          <span>旧故里</span>
          <el-divider direction="vertical"></el-divider>
          <span>草木深</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
	export default {
		name: "divider"
	}
</script>

<style>
  .page-divider {
    color: #666666;
    font-size: 14px;
  }
</style>
