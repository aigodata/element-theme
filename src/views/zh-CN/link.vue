<template>
  <section class="page-link content element-doc content">
    <h2 id="border-bian-kuang">
      <a href="#button-an-niu" aria-hidden="true" class="header-anchor">¶</a>
      Link 文字链接
    </h2>

    <p>文字超链接。</p>

    <h3 id="ji-chu-yong-fa">
      <a href="#ji-chu-yong-fa" aria-hidden="true" class="header-anchor">¶</a>
      基础用法
    </h3>
    <p>基础的文字链接用法。</p>
    <div class="demo-block demo-zh-CN demo-link">
      <div class="source">
        <div>
          <div><a href="https://element.eleme.io" target="_blank" class="el-link el-link--default is-underline">
            <!----><span class="el-link--inner">默认链接</span><!----></a> <a class="el-link el-link--primary is-underline">
            <!----><span class="el-link--inner">主要链接</span><!----></a> <a class="el-link el-link--success is-underline">
            <!----><span class="el-link--inner">成功链接</span><!----></a> <a class="el-link el-link--warning is-underline">
            <!----><span class="el-link--inner">警告链接</span><!----></a> <a class="el-link el-link--danger is-underline">
            <!----><span class="el-link--inner">危险链接</span><!----></a> <a class="el-link el-link--info is-underline">
            <!----><span class="el-link--inner">信息链接</span><!----></a></div>
        </div>
      </div>
    </div>

    <h3 id="jin-yong-zhuang-tai">
      <a href="#jin-yong-zhuang-tai" aria-hidden="true" class="header-anchor">¶</a>
      禁用状态
    </h3>
    <p>文字链接不可用状态。</p>
    <div class="demo-block demo-zh-CN demo-link">
      <div class="source">
        <div>
          <div><a class="el-link el-link--default is-disabled"><!----><span class="el-link--inner">默认链接</span><!---->
          </a> <a class="el-link el-link--primary is-disabled"><!----><span class="el-link--inner">主要链接</span><!---->
          </a> <a class="el-link el-link--success is-disabled"><!----><span class="el-link--inner">成功链接</span><!---->
          </a> <a class="el-link el-link--warning is-disabled"><!----><span class="el-link--inner">警告链接</span><!---->
          </a> <a class="el-link el-link--danger is-disabled"><!----><span class="el-link--inner">危险链接</span><!----></a>
            <a class="el-link el-link--info is-disabled"><!----><span class="el-link--inner">信息链接</span><!----></a>
          </div>
        </div>
      </div>
    </div>

    <h3 id="xia-hua-xian">
      <a href="#xia-hua-xian" aria-hidden="true" class="header-anchor">¶</a>
      下划线
    </h3>
    <p>文字链接下划线。</p>
    <div class="demo-block demo-zh-CN demo-link">
      <div class="source">
        <div>
          <div><a class="el-link el-link--default"><!----><span class="el-link--inner">无下划线</span><!----></a> <a
            class="el-link el-link--default is-underline"><!----><span class="el-link--inner">有下划线</span><!----></a>
          </div>
        </div>
      </div>
    </div>

    <h3 id="tu-biao">
      <a href="#tu-biao" aria-hidden="true" class="header-anchor">¶</a>
      图标
    </h3>
    <p>带图标的文字链接可增强辨识度。</p>
    <div class="demo-block demo-zh-CN demo-link">
      <div class="source">
        <div>
          <div><a class="el-link el-link--default is-underline"><i class="el-icon-edit"></i><span
            class="el-link--inner">编辑</span><!----></a> <a class="el-link el-link--default is-underline"><!----><span
            class="el-link--inner">查看<i class="el-icon-view el-icon--right"></i></span><!----></a></div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'border'
  }
</script><!---->

<style scoped>
  .page-link {

  }

  .page-link .el-link {
    padding: 0 6px;
  }
</style>
