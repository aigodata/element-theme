<template>
  <section class="page-backtop content element-doc content">
    <h2 id="backtop-hui-dao-ding-bu">
      <a href="#backtop-hui-dao-ding-bu" aria-hidden="true" class="header-anchor">¶</a>
      Backtop 回到顶部
    </h2>

    <p>返回页面顶部的操作按钮</p>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <p>滑动页面即可看到右下方的按钮。</p>
    <div class="demo-block demo-zh-CN demo-backtop">
      <div class="source">
        <div>
          Scroll down to see the bottom-right button.
          <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
        </div>
      </div>
    </div>

    <h3 id="zi-ding-yi-xian-shi-nei-rong">
      <a href="#zi-ding-yi-xian-shi-nei-rong" aria-hidden="true" class="header-anchor">¶</a>
      自定义显示内容
    </h3>
    <p>显示区域被固定为 40px * 40px 的区域, 其中的内容可支持自定义。</p>
    <div class="demo-block demo-zh-CN demo-backtop">
      <div class="source">
        Scroll down to see the bottom-right button.
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
          <div class="back-top">UP</div>
        </el-backtop>
      </div>
    </div>
  </section>
</template>

<script>
	export default {
		name: "backtop"
	}
</script>

<style>
  .page-backtop {
    height: 1000px;
  }

  .back-top {
    height: 100%;
    width: 100%;
    border: 1px solid #2aa1ef;
    -webkit-box-shadow: 0px 2px 8px rgba(42, 161, 239, 0.4);
    box-shadow: 0px 2px 8px rgba(42, 161, 239, 0.4);
    background: linear-gradient(to top, #2aa1ef , #3eb1fc);
    text-align: center;
    line-height: 40px;
    color: #fff;
    border-radius: 50%;
    font-size: 15px;
  }

  .back-top:hover {
    border-color: #2aa1ef;
    background: linear-gradient(to top, #1284cf , #3eb1fc)
  }


</style>
