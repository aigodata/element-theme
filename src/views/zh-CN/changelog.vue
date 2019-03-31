<template>
  <section class="page-changelog">
    <div class="page-changelog content">
      <div class="heading">
        <button type="button" class="el-button fr el-button--default">
          <span>
            <a href="https://github.com/ElemeFE/element/releases" target="_blank">GitHub Releases</a>
          </span>
        </button>
        更新日志
      </div>
      <ul class="timeline">
        <li>
          <h3><a href="https://github.com/ElemeFE/element/releases/tag/v2.7.0" target="_blank">2.7.0</a></h3>
          <p><em>2019-03-28</em></p>
          <h4 id="xin-te-xing"> 新特性</h4>
          <ul>
            <li>
              Table
              <ul>
                <li>
                  增加对树形结构数据的支持
                </li>
              </ul>
              <h4 id="xiu-fu"> 修复</h4>
              <ul>
                <li>
                  Tabs
                  <ul>
                    <li>
                      阴影样式使用全局主颜色
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'changelog'
  }
</script>

<style scoped>
  .page-changelog {

  }

  .page-changelog ul li {
    list-style: none;
  }
</style>
