<template>
  <section class="page-changelog">
    <div class="page-changelog content">
      <div class="heading">
        <button type="button" class="el-button fr el-button--default">
          <span>
            <a href="https://github.com/aigodata/element-theme" target="_blank">GitHub Releases</a>
          </span>
        </button>
        更新日志
      </div>
      <ul class="timeline">
        <li>
          <h3><a href="" target="_blank">2.7.0</a></h3>
          <p><em>2019-03-28</em></p>
          <h4 id="xin-te-xing" class="the-title"> 新特性</h4>
          <ul>
            <li>
              <span class="weight-font">Table</span>
              <ul>
                <li>
                  增加对树形结构数据的支持
                </li>
              </ul>
            </li>
          </ul>
          <h4 id="xiu-fu"> 修复</h4>
          <ul>
            <li>
              <span class="weight-font">Tabs</span>
              <ul>
                <li>
                  阴影样式使用全局主颜色
                </li>
              </ul>
            </li>
            <li>
              <span class="weight-font">Table</span>
              <ul>
                <li>
                  Table footer 与 body 的对齐一致
                </li>
              </ul>
            </li>
          </ul>
          <h4 id="you-hua" class="the-title"> 优化</h4>
          <ul>
            <li>
              <span class="weight-font">Chore</span>
              <ul>
                <li>
                  增加网页描述信息
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

  .page-changelog .timeline ul ul li::before {
    width: 2px;
    height: 2px;
  }

  .page-changelog .weight-font {
    font-weight: 700;
  }

  .page-changelog .timeline h4 {
    color: #409eff;
  }

  .page-changelog ul {
    list-style: none;
  }

  .page-changelog ul li {
    list-style: none;
  }

  .page-changelog .timeline ul {
    padding: 20px 30px 0;
  }
</style>
